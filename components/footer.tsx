import Link from "next/link"
import { Utensils } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center justify-center space-y-6 py-10 md:h-32 md:flex-row md:justify-between md:space-y-0 md:py-0 px-4 md:px-8">
        <div className="flex items-center space-x-2">
          <Utensils className="h-8 w-8 text-[#FD8000]" />
          <span className="text-2xl font-bold text-[#FD8000]">Grub</span>
        </div>
        <nav className="flex flex-wrap justify-center items-center gap-6 text-base">
          <Link href="/about" className="text-muted-foreground hover:text-foreground relative group">
            About
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#FD8000] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
          </Link>
          <Link href="/features" className="text-muted-foreground hover:text-foreground relative group">
            Features
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#FD8000] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
          </Link>
          <Link href="/testimonials" className="text-muted-foreground hover:text-foreground relative group">
            Testimonials
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#FD8000] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
          </Link>
          <Link href="/book-demo" className="text-muted-foreground hover:text-foreground relative group">
            Book a Demo
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#FD8000] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
          </Link>
        </nav>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground relative group">
            Privacy Policy
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#FD8000] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
          </Link>
          <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground relative group">
            Terms of Service
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#FD8000] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

