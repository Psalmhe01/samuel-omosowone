import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { projects } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { useNavigate } from "react-router-dom"
import {
  IconArrowLeft,
  IconArrowRight,
  IconBrandGithub,
  IconExternalLink,
} from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function ProjectDetail({ slug }: { slug: string }) {
  const navigate = useNavigate()
  const currentProjectIndex = projects.findIndex((p) => p.title === slug)
  const previousProject =
    currentProjectIndex > 0 ? projects[currentProjectIndex - 1] : undefined
  const nextProject =
    currentProjectIndex >= 0 && currentProjectIndex < projects.length - 1
      ? projects[currentProjectIndex + 1]
      : undefined

  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="relative z-10 mx-auto mt-24 flex w-full max-w-[90%] flex-col justify-center overflow-hidden p-6 md:px-12">
      {projects
        .filter((p) => p.title === slug)
        .map((p, i) => (
          <div key={i}>
            <h1 className="mb-8 text-3xl font-bold text-white md:mb-12 md:text-6xl">
              {p.title}
            </h1>
            <ProjectBreadcrumb slug={slug} />
            <img
              alt={p.title}
              className="object-position-top mt-8 mb-8 max-h-192 w-full justify-self-center rounded-none object-contain"
              src={p.image}
            />
            <div className="mb-8 grid grid-cols-1 gap-4 md:mb-12 lg:grid-cols-[2fr_auto_1fr]">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Description of the Project
                </h2>
                <p className="my-4 text-lg text-gray-300 lg:pr-8">
                  {p.fullDescription}
                </p>
              </div>
              <Separator
                orientation="vertical"
                className="hidden h-full lg:block"
              />
              <div className="lg:pl-4">
                <h2 className="text-lg font-bold text-white">
                  Date of Completion:
                </h2>
                <p className="my-4 text-lg text-gray-300">{p.date}</p>
                <h2 className="text-lg font-bold text-white">Tech Stack:</h2>
                {p.tech.map((t) => (
                  <Badge
                    key={t}
                    className="my-4 mr-2 rounded-full bg-gray-800 px-2 py-1 text-gray-300"
                  >
                    {t}
                  </Badge>
                ))}
                <h2 className="text-lg font-bold text-white">Links:</h2>
                <p className="my-4 flex gap-4 text-lg leading-relaxed text-gray-300">
                  <Button onClick={() => openLink(`${p.githubUrl}`)}>
                    <IconBrandGithub />
                  </Button>

                  <Button onClick={() => openLink(`${p.liveUrl}`)}>
                    <IconExternalLink />
                  </Button>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 border-t border-gray-800 py-8">
              <Button
                variant="outline"
                disabled={!previousProject}
                onClick={() =>
                  previousProject &&
                  navigate(`/projects/${previousProject.title}`)
                }
                className="h-auto min-w-0 justify-start py-3 text-left"
              >
                <IconArrowLeft className="shrink-0" />
                <span className="truncate">
                  Previous project
                  {previousProject && (
                    <span className="block text-xs text-gray-400">
                      {previousProject.title}
                    </span>
                  )}
                </span>
              </Button>

              <Button
                variant="outline"
                disabled={!nextProject}
                onClick={() =>
                  nextProject && navigate(`/projects/${nextProject.title}`)
                }
                className="h-auto min-w-0 justify-end py-3 text-right"
              >
                <span className="truncate">
                  Next project
                  {nextProject && (
                    <span className="block text-xs text-gray-400">
                      {nextProject.title}
                    </span>
                  )}
                </span>
                <IconArrowRight className="shrink-0" />
              </Button>
            </div>
          </div>
        ))}
    </div>
  )
}

function ProjectBreadcrumb({ slug }: { slug: string }) {
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
          <BreadcrumbLink
            onClick={() => navigate("/projects")}
            className="cursor-pointer"
          >
            Projects
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage
            onClick={() => navigate(`/projects/${slug}`)}
            className="cursor-pointer"
          >
            {slug}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
