import { Button } from "@/components/ui/button";
import { ImageCarousel } from "@/components/image-carousel";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const AboutSection = () => {
  const t = useTranslations("AboutSection");

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#FD8000] dark:text-[#FFA500]">
              {t("title")}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("description")}
            </p>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400">
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 ltr:mr-2 rtl:ml-2 text-green-500 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                {t("features.streamlinedOrdering")}
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 ltr:mr-2 rtl:ml-2 text-green-500 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                {t("features.payrollDeductions")}
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 ltr:mr-2 rtl:ml-2 text-green-500 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                {t("features.localPartnerships")}
              </li>
            </ul>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                asChild
                className="bg-[#FD8000] hover:bg-[#FFA500] text-white"
              >
                <Link href="/about">{t("learnMore")}</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">{t("contactUs")}</Link>
              </Button>
            </div>
          </div>
          <div className="lg:order-last">
            <ImageCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};
