import type { Project } from "@/types";
import ace from "@/assets/ace-thumb.png";
import psalmhe from "@/assets/psalmhe-thumb.png";
import fitbae from "@/assets/fitbae-thumb.png";
import topichub from "@/assets/topichub-thumb.png"
import vetes from "@/assets/vetes-thumb.png"

export const projects: Project[] = [
  {
    slug: "psalmhe-portfolio",
    title: "Psalmhe Portfolio",
    date: "December 2024",
    description: "A portfolio of my personal photography projects",
    fullDescription:
      "A full-stack photography portfolio built to showcase my work and streamline client bookings. Built with React and Mantine on the frontend, with Cloudinary handling image storage/delivery and Firebase powering the backend data layer. Visitors can browse organized folders of photography work by category, and book a photoshoot directly through the site. On the admin side, I can log into a private dashboard to create password-protected client galleries — uploading a client's photos and generating a customized, shareable link so they can view their gallery privately without needing an account of their own.",
    tech: ["React", "JavaScript", "Mantine", "Cloudinary", "Firebase"],
    githubUrl: "https://github.com/Psalmhe01/psalmhe-portfolio",
    liveUrl: "https://psalmhe-portfolio.vercel.app",
    image: psalmhe,
    featured: true,
  },

  {
    slug: "vetes",
    title: "Vetes",
    date: "May 2026",
    description: "An online clothing store group project",
    fullDescription:
      "A full e-commerce web application built as a group project, simulating a real online clothing store. The backend runs on C# with .NET, backed by a SQL Server database, with TypeScript handling the frontend logic. The site supports the core flows of an online storefront: browsing and searching products, adding items to a cart, entering shipping details, checking out, and tracking order status afterward. Working in a group on this project meant coordinating on database schema design and API structure across the team, in addition to building out individual features.",
    tech: ["React", "TypeScript", "Mantine", "SQL", ".NET"],
    githubUrl: "https://github.com/ZacharyNW/CMPS-2850-S26-G1",
    liveUrl: "https://vetes-iota.vercel.app",
    image: vetes,
  },

  {
    slug: "ace",
    title: "Ace",
    date: "March 2026",
    description: "An AI-powered personalized study planner",
    fullDescription:
      "An AI-powered study planner built in 36 hours at a hackathon with a team of three. Built with React and Mantine on the frontend, powered by Google Gemini for the AI generation logic. Users fill out a short survey about their study habits and preferences, then upload a course syllabus. Ace parses the syllabus to isolate deadlines and key dates, then generates a personalized daily study plan that adapts around those dates — turning a static PDF syllabus into an actionable day-by-day schedule.",
    tech: ["React", "JavaScript", "Mantine", "Google Gemini"],
    githubUrl: "https://github.com/tonisobowale01/lionhacks-theunderdogs",
    liveUrl: "https://lionhacks-theunderdogs.vercel.app",
    image: ace,
    featured: true,
  },

   {
    slug: "topichub",
    title: "TopicHub",
    date: "April 2026",
    description: "A forum for posting topics and threaded messages.",
    fullDescription:
      "A solo-built discussion forum where users can create topics and post messages within them. Built with Node.js and Express on the backend, MongoDB for data storage, and vanilla JavaScript/HTML/CSS on the frontend — no frameworks, to focus on fundamentals. Users can create an account, start new topics (auto-subscribing themselves to it), and post messages under any topic they've subscribed to. The project involved building out authentication, subscription logic, and message threading entirely from scratch.",
    tech: ["Node.js", "Express", "MongoDB", "JavaScript"],
    githubUrl: "https://github.com/Psalmhe01/topichub",
    liveUrl: "https://topichub-krac.onrender.com",
    image: topichub,
    featured: true,
  },

  {
    slug: "fitbae",
    title: "FitBae",
    date: "June 2026",
    description: "An ongoing AI workout app built for romantic workout partners.",
    fullDescription:
      "An ongoing mobile-focused workout app that pairs AI-generated fitness plans with a social layer built for romantic workout partners. Built with React and Mantine on the frontend, Supabase for the backend and database, Google Gemini for AI plan generation, and Google Sign-In for authentication. Users complete a profile (goals, available gym equipment) and receive an AI-generated workout plan tailored to what they have access to, then log progress over time. The social layer lets a user link their profile to a partner, send \"hearts\" as encouragement, and message each other in-app — designed around the idea of couples staying accountable to fitness goals together.",
    tech: ["React", "Mantine", "Supabase", "Google Gemini"],
    githubUrl: "https://github.com/Psalmhe01/fitbae",
    liveUrl: "https://fitbae.vercel.app",
    image: fitbae,
    featured: true,
  },
]
