import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import FAQAccordion from "@/components/accordion"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TestimonialsSection />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Frequently Asked Questions</h2>
          <FAQAccordion />
        </div>
      </section>
    </div>
  )
}

