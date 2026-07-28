import { cn } from "@/lib/utils"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl columns-[18rem] gap-6 space-y-6 md:columns-[20rem] xl:columns-[22rem]",
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  content,
}: {
  className?: string
  content?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "inline-block w-full break-inside-avoid overflow-hidden border border-neutral-200 bg-white shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className
      )}
    >
      {content}
    </div>
  )
}
