import { promises as fs } from "fs"
import path from "path"

import Link from "next/link"
import { compileMDX } from "next-mdx-remote/rsc"

import { Settings } from "@/lib/meta"
import { Separator } from "@/components/ui/separator"
import { Tag } from "@/components/ui/tag"
import { Typography } from "@/components/ui/typography"

type BlogPost = {
  slug: string
  title: string
  description: string
  tags?: string[]
}

async function getAllBlogPosts(): Promise<BlogPost[]> {
  const contentDir = path.join(process.cwd(), "contents/tech-blogs")

  try {
    const entries = await fs.readdir(contentDir, { withFileTypes: true })
    const posts: BlogPost[] = []

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const mdxPath = path.join(contentDir, entry.name, "index.mdx")
        try {
          const rawMdx = await fs.readFile(mdxPath, "utf-8")
          const { frontmatter } = await compileMDX<{
            title: string
            description: string
            tags?: string[]
          }>({
            source: rawMdx,
            options: { parseFrontmatter: true },
          })

          posts.push({
            slug: entry.name,
            title: frontmatter.title,
            description: frontmatter.description,
            tags: frontmatter.tags || [],
          })
        } catch {
          // Skip if index.mdx doesn't exist
          continue
        }
      }
    }

    return posts
  } catch {
    // Return empty array if directory doesn't exist
    return []
  }
}

export default async function TechBlogsPage() {
  const posts = await getAllBlogPosts()

  return (
    <div className="flex-[3] pt-10">
      <Typography>
        <h1 className="!mb-2 text-3xl !font-semibold">技術ブログ</h1>
        <p className="text-muted-foreground -mt-4 text-sm">
          技術的な学びや実装の記録
        </p>
        <Separator className="my-6" />

        {posts.length === 0 ? (
          <p className="text-muted-foreground">まだ記事がありません。</p>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <article key={post.slug} className="space-y-2">
                <h2 className="text-xl font-semibold">
                  <Link
                    href={`/tech-blogs/${post.slug}`}
                    className="hover:underline"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-muted-foreground text-sm">
                  {post.description}
                </p>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Tag key={tag} size="sm">
                        {tag}
                      </Tag>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </Typography>
    </div>
  )
}

export async function generateMetadata() {
  return {
    title: `技術ブログ - ${Settings.title}`,
    description: "技術的な学びや実装の記録",
  }
}
