import AboutPreview from "@/sections/AboutPreview"
import ContactPreview from "@/sections/ContactPreview"
import Hero from "@/sections/Hero"
import ProjectsPreview from "@/sections/ProjectsPreview"
/**import AboutPreview from "@/sections/AboutPreview"

import Skills from "@/sections/Skills"
import ContactPreview from "@/sections/ContactPreview"***/

function Home() {
  return (
    <div >
      <Hero />
      <ProjectsPreview />
      <AboutPreview />
      <ContactPreview />
      {/*<Skills />
      */}
    </div>
  )
}

export default Home

