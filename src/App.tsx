import { BrowserRouter } from "react-router-dom"
import Navbar from "@/components/layout/Navbar"
import Home from "@/pages/Home"
import { Route, Routes } from "react-router-dom"
/********import { Button } from "@/components/ui/button"
import Footer from "@/components/layout/Footer"
import About from "@/pages/About"
import Projects from "@/pages/Projects"
import ProjectDetail from "@/pages/ProjectDetail"
import Contact from "@/pages/Contact"
******/
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/***<Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />***/}
      </Routes>
    </BrowserRouter>
  )
}

export default App
