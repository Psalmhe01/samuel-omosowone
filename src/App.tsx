import { useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import Navbar from "@/components/layout/Navbar"
import Home from "@/pages/Home"
import Projects from "@/pages/Projects"
import { Route, Routes, useLocation, useParams } from "react-router-dom"
import ProjectDetail from "./pages/ProjectDetail"
import About from "@/pages/About"
/********import { Button } from "@/components/ui/button"
import Footer from "@/components/layout/Footer"
import ProjectDetail from "@/pages/ProjectDetail"
import Contact from "@/pages/Contact"
******/

function ProjectDetailRoute() {
  const { slug } = useParams()

  return <ProjectDetail slug={slug ?? ""} />
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    })
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetailRoute />} />
        <Route path="/about" element={<About />} />
        {/***
        <Route path="/contact" element={<Contact />} />***/}
      </Routes>
    </BrowserRouter>
  )
}

export default App
