import React from "react"
import { useNavigate } from "react-router-dom"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { Button } from "@/components/ui/button"
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover"
import { projects } from "@/data/projects"

export default function ProjectPreview() {
  const navigate = useNavigate()
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
              <button
                key={i}
                onClick={() => navigate(`/projects/${p.title}`)}
              >
                <BentoGridItem
                  key={i}
                  content={
                    <DirectionAwareHover imageUrl={p.image}>
                      <div className="flex flex-col items-start justify-start">
                        <p className="text mb-2 font-[Helvetica] text-xl md:text-xl">
                          {p.title}
                        </p>
                        <p className="text-sm font-normal">{p.description}</p>
                      </div>
                    </DirectionAwareHover>
                  }
                />
              </button>
            ))}
        </BentoGrid>
      </div>
      <div>
        <Button
          size="lg"
          className="w-fit justify-center rounded-full border-3 border-white/60 px-8 font-semibold text-white/60"
          variant="outline"
          onClick={() => window.open("/projects", "_self")}
        >
          VIEW ALL
        </Button>
      </div>
    </div>
  )
}
