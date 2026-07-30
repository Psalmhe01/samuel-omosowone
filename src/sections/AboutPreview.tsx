import aboutIMG from "@/assets/aboutIMG.jpg"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function AboutPreview() {

  const navigate = useNavigate()


  return (
    <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center p-6 md:px-12">
      <div
        className="h-192 bg-contain bg-left bg-no-repeat"
        style={{ backgroundImage: `url(${aboutIMG})` }}
      >
        <div className=" p-2 z-10 h-192 max-w-lg content-center justify-self-end">
          <p className="mb-2 font-[Helvetica] text-sm text-white/80 md:text-sm">
            ABOUT ME
          </p>
          <h2 className="mb-8 text-3xl font-bold text-white md:text-6xl">
            Software Senior
          </h2>
          <h3 className="mb-2 text-lg text-white md:text-xl">
            I am a fullstack web and software developer. I am currently a senior
            Computer Science major in Southeastern Louisiana University.
          </h3>
          <Button
          size="lg"
          className="w-fit rounded-full px-8 font-semibold text-white/60 border-3 border-white/60 justify-center"
          variant="outline"
          onClick={() => navigate("/about")}
        >
          READ MORE
        </Button>
        </div>
      </div>
    </div>
  )
}
