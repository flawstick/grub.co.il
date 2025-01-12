import { FeaturesSection } from "@/components/features-section";
import { getTranslations } from "next-intl/server";

export default async function FeaturesPage() {
  const t = await getTranslations("FeaturesPage");

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
      <FeaturesSection />
    </div>
  );
}
