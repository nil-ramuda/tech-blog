import { Sidebar } from "@/components/navigation/sidebar"

export default function Documents({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-full items-start gap-10">
      <Sidebar />
      <div className="flex-1 overflow-auto md:flex-[6]">{children}</div>
    </div>
  )
}
