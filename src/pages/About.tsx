import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Badge } from "@/components/ui/badge"
import { useNavigate } from "react-router-dom"
import { skills } from "@/data/skills"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import photography from "@/assets/CM8.jpg"
import ContactPreview from "@/sections/ContactPreview"

export default function About() {
  return (
    <>
      <div className="relative z-10 mx-auto mt-24 flex w-full max-w-[90%] flex-col justify-center overflow-hidden p-6 md:px-12">
        <h1 className="mb-8 text-3xl font-bold text-white md:text-6xl">
          About me
        </h1>
        <AboutBreadcrumb />
        <div className="mb-8 grid grid-cols-1 gap-4 md:mb-12 lg:grid-cols-[2fr_auto_1fr]">
          <div>
            <p className="my-4 text-lg text-gray-300 lg:pr-8">
              I'm a Computer Science student with hands-on educational and
              extracurricular experience designing and building web
              applications. Through academic projects, hackathons, personal
              projects, and collaborative work, I've developed a strong
              foundation in web development across the full developemental
              lifecycle. This includes planning and designing user interfaces to
              developing backend systems, integrating APIs, managing databases,
              and deploying applications. I enjoy tackling complex problems and
              turning ideas into functional, user-friendly applications. My goal
              is to continue growing as a developer and contribute to innovative
              projects that make a positive impact.
            </p>
            <p className="my-4 text-lg text-gray-300 lg:pr-8">
              Beyond technical skills, I value writing clean, maintainable code,
              collaborating effectively with others, and continuously improving
              my craft. Every project I work on is an opportunity to learn,
              experiment, and create something meaningful. I'm excited to bring
              my passion for software development to new challenges and
              opportunities.
            </p>
          </div>
          <Separator
            orientation="vertical"
            className="hidden h-full lg:block"
          />
          <div>
            <h3 className="mb-4 text-2xl font-bold text-white">
              Skills and Technologies
            </h3>
            {skills.map((skill) => (
              <Popover key={skill.name}>
                <PopoverTrigger
                  render={
                    <Badge className="my-4 mr-2 rounded-full bg-gray-800 px-2 py-1 text-gray-300">
                      <div className="flex items-center">
                        {skill.icon && <skill.icon className="mr-2" />}
                        {skill.name}
                      </div>
                    </Badge>
                  }
                />
                <PopoverContent
                  align="start"
                  className="relative overflow-hidden rounded-lg bg-gray-800"
                >
                  {skill.icon && (
                    <skill.icon
                      aria-hidden="true"
                      className="pointer-events-none absolute top-1/2 right-3 size-20 -translate-y-1/2 opacity-10"
                    />
                  )}
                  <PopoverHeader className="relative z-10 pr-16">
                    <PopoverTitle>{skill.name}</PopoverTitle>
                    <PopoverDescription>
                      <p className="mb-2 text-sm text-gray-400 capitalize italic">
                        {skill.category}
                      </p>
                      <a
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white-400 text-sm hover:underline"
                      >
                        {skill.link}
                      </a>
                    </PopoverDescription>
                  </PopoverHeader>
                </PopoverContent>
              </Popover>
            ))}
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 items-center gap-4 md:mb-12 lg:grid-cols-[1fr_auto_2fr]">
          <div>
            <h3 className="mb-4 text-2xl font-bold text-white">
              Beyond the Code
            </h3>
            <p className="my-4 text-lg text-gray-300 lg:pr-8">
              Outside of programming, I have a passion for photography,
              exploring different styles of capturing moments and visual
              storytelling. I also enjoy watching movies and TV shows,
              appreciating the creativity behind cinematography. These interests
              inspire my creativity and help me approach problem-solving from
              different perspectives.
            </p>
          </div>
          <Separator
            orientation="vertical"
            className="hidden h-full lg:block"
          />
          <img src={photography} alt="About Me" className="mt-8 w-full" />
        </div>
      </div>
      <ContactPreview />
    </>
  )
}

function AboutBreadcrumb() {
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
            onClick={() => navigate("/about")}
            className="cursor-pointer"
          >
            About
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
