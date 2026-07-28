import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import heroImg from "@/assets/IMG_9178.jpg"
import { EncryptedText } from "@/components/aceternity/encrypted-text"
import { useNavigate } from "react-router-dom"

function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3])

  const navigate = useNavigate();
  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Full-bleed background image */}
      <motion.img
        src={heroImg}
        alt="Samuel Omosowone"
        style={{
          scale,
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top",
        }}
      />
      {/* Dark gradient overlay so text stays legible over the photo */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

      {/* Hero text content, overlaid on the left */}
      <div className="relative z-10 flex h-[calc(100%-88px)] max-w-xl flex-col justify-center px-6 md:px-12">
        <p className="mb-2 text-lg text-white/80 md:text-xl">
          <EncryptedText
            text="Hello, my name is"
            encryptedClassName="text-neutral-500"
            revealedClassName="text-white"
            revealDelayMs={50}
          />
        </p>

        <h1 className="mb-8 text-4xl font-bold text-white md:text-6xl">
          <EncryptedText
            text="Samuel Omosowone"
            encryptedClassName="text-neutral-500"
            revealedClassName="text-white"
            revealDelayMs={100}
          />
        </h1>

        <Button
          size="lg"
          className="w-fit rounded-full px-8 font-semibold text-black"
          onClick={() => navigate('/Projects')}
        >
          VIEW PORTFOLIO
        </Button>
      </div>
    </div>
  )
}

export default Hero
