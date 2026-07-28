import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { Button } from "@/components/ui/button"
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover"
import { projects } from "@/data/projects"

export default function ProjectPreview() {
  return (
    <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center p-6 md:px-12">
      <p className="mb-2 font-[Helvetica] text-sm text-muted-foreground md:text-sm">
        MY WORKS
      </p>
      <h2 className="mb-8 text-3xl font-bold text-white md:text-6xl">
        Take a look at my projects
      </h2>
      <div>
        <BentoGrid className="w-full">
          {projects
            .filter((p) => p.featured)
            .map((p, i) => (
              <BentoGridItem
                key={i}
                content={
                  <DirectionAwareHover imageUrl={p.image}>
                    <p className="text mb-2 text-xl md:text-xl font-[Helvetica] ">
                      {p.title}
                    </p>
                    <p className="text-sm font-normal">{p.description}</p>
                  </DirectionAwareHover>
                }
              />
            ))}
        </BentoGrid>
      </div>
      <div>
        <Button
          size="lg"
          className="w-fit rounded-full px-8 font-semibold text-white/60 border-3 border-white/60 justify-center"
          variant="outline"
        >
          VIEW ALL
        </Button>
      </div>
    </div>
  )
}
