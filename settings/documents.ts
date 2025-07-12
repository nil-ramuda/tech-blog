import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
  {
    heading: "Introduction",
    title: "Basic Setup",
    href: "/basic-setup",
    items: [
      {
        title: "Installation",
        href: "/basic-setup/installation",
      },
      {
        title: "Setup",
        href: "/basic-setup/setup",
      },
      {
        title: "Changelog",
        href: "/basic-setup/changelog",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Navigation",
    href: "/navigation",
    heading: "Documents",
  },
  {
    title: "Structure",
    href: "/structure",
    items: [
      {
        title: "Deep",
        href: "/structure/deep",
        items: [
          {
            title: "Deeper",
            href: "/structure/deep/deeper",
            items: [
              {
                title: "Even deeper",
                href: "/structure/deep/deeper/even-deeper",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Markdown",
    href: "/markdown",
    heading: "Components",
    items: [
      {
        title: "Cards",
        href: "/markdown/cards",
      },
      {
        title: "Diagrams",
        href: "/markdown/diagrams",
      },
      {
        title: "Filetree",
        href: "/markdown/filetree",
      },
      {
        title: "Lists",
        href: "/markdown/lists",
      },
      {
        title: "Maths",
        href: "/markdown/maths",
      },
      {
        title: "Notes",
        href: "/markdown/notes",
      },
      {
        title: "Steps",
        href: "/markdown/steps",
      },
      {
        title: "Table",
        href: "/markdown/table",
      },
      {
        title: "Tabs",
        href: "/markdown/tabs",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    heading: "技術ブログ",
    title: "全ての記事",
    href: "/tech-blogs",
  },
]
