import { TestimonialsSection } from "@/components/testimonials-section";
import { getTranslations } from "next-intl/server";

export default async function TestimonialsPage() {
  const t = await getTranslations("TestimonialsPage");

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-6 text-[#FD8000] dark:text-[#FFA500]">
          {t("title")}
        </h1>
        <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
          {t("description")}
        </p>
      </div>
      <TestimonialsSection />
    </div>
  );
}
