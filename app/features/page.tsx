import { FeaturesSection } from "@/components/features-section"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-6 text-[#FD8000] dark:text-[#FFA500]">Grub Features</h1>
        <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
          Discover how Grub revolutionizes meal management for your team. Our comprehensive set of features is designed to streamline ordering, simplify accounting, and enhance the overall dining experience for your employees.
        </p>
      </div>
      <FeaturesSection />
    </div>
  )
}

