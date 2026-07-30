import { Link } from "react-router-dom"

function Navbar() {
  
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between bg-black/60 px-6 py-6 backdrop-blur-md md:px-12 border-b-1 border-gray">
      <Link
        to="/"
        aria-label="Samuel O. — Home"
        className="relative block h-10 w-24 overflow-hidden"
      >
        <img
          src="/logo.svg"
          alt="Samuel O."
          className="absolute top-1/2 left-0 h-12 w-12 -translate-y-1/2 object-contain"
        />
      </Link>

      <div className="flex items-center gap-6 text-white">
        <span className="hidden text-sm tracking-wide sm:inline">
          PHONE: 203 994 1895
        </span>
        <button aria-label="Open menu">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
