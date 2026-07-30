import React from "react"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { CometCard } from "@/components/ui/comet-card"
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover"
import { projects } from "@/data/projects"
import { useNavigate } from "react-router-dom"

export default function Projects() {
  const navigate = useNavigate()
  return (
    <div className="relative z-10 mx-auto mt-24 flex w-full max-w-7xl flex-col justify-center overflow-hidden bg-black p-6 md:px-12">
      <h1 className="mb-8 text-3xl font-bold text-white md:text-6xl">
        Take a look at my projects
      </h1>
      <ProjectBreadcrumb />
      <BentoGrid className="mt-8 w-full">
        {projects.map((p, i) => (
          <button
            key={i}
            onClick={() => navigate(`/projects/${p.title}`)}
            className="w-full"
          >
            <CometCard>
              <BentoGridItem
                key={i}
                content={
                  <DirectionAwareHover imageUrl={p.image}>
                    <div className="flex flex-col items-start justify-start">
                      <p className="text mb-2 cursor-pointer font-[Helvetica] text-xl md:text-xl">
                        {p.title}
                      </p>
                      <p className="text-sm font-normal">{p.description}</p>
                    </div>
                  </DirectionAwareHover>
                }
              />
            </CometCard>
          </button>
        ))}
      </BentoGrid>
    </div>
  )
}

function ProjectBreadcrumb() {
  const navigate = useNavigate()

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            onClick={() => navigate("/")}
            className="cursor-pointer"
          >
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage
            onClick={() => navigate("/projects")}
            className="cursor-pointer"
          >
            Projects
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
