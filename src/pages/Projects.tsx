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
import { Space } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function Projects() {
  return (
    <div className="relative z-10 mx-auto mt-24 flex w-full max-w-7xl flex-col justify-center overflow-hidden bg-black p-6 md:px-12">
      <h1 className="mb-8 text-3xl font-bold text-white md:text-6xl">
        Take a look at my projects
      </h1>
      <ProjectBreadcrumb />
      <BentoGrid className="w-full">
        {projects.map((p, i) => (
          <CometCard>
            <BentoGridItem
            key={i}
            content={
              
                <DirectionAwareHover imageUrl={p.image}>
                  <p className="text mb-2 font-[Helvetica] text-xl md:text-xl">
                    {p.title}
                  </p>
                  <p className="text-sm font-normal">{p.description}</p>
                </DirectionAwareHover>
              
            }
          />
          </CometCard>
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
