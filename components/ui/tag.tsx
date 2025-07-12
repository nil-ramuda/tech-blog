import { cn } from "@/lib/utils"

interface TagProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline"
  size?: "sm" | "md"
}

export function Tag({
  children,
  className,
  variant = "default",
  size = "sm",
}: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md font-medium transition-colors",
        {
          "bg-secondary text-secondary-foreground hover:bg-secondary/80":
            variant === "default",
          "border-input bg-background hover:bg-accent hover:text-accent-foreground border":
            variant === "outline",
          "px-2 py-1 text-xs": size === "sm",
          "px-2.5 py-1.5 text-sm": size === "md",
        },
        className
      )}
    >
      {children}
    </span>
  )
}
