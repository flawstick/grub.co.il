import { TestimonialsSection } from "@/components/testimonials-section"

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-6 text-[#FD8000] dark:text-[#FFA500]">Client Testimonials</h1>
        <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
          Discover what our clients have to say about their experience with Grub. From streamlined meal management to increased employee satisfaction, hear how Grub is transforming corporate dining.
        </p>
      </div>
      <TestimonialsSection />
    </div>
  )
}

