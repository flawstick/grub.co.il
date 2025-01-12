"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SideNavigation } from "@/components/side-navigation";
import { useTranslations } from "next-intl";

export default function ForEmployersPage() {
  const t = useTranslations("ForEmployersPage");

  const navItems = [
    { id: "introduction", title: t("navigation.introduction") },
    { id: "key-benefits", title: t("navigation.keyBenefits") },
    { id: "how-it-works", title: t("navigation.howItWorks") },
    { id: "case-studies", title: t("navigation.caseStudies") },
    { id: "get-started", title: t("navigation.getStarted") },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFA500]/10 to-[#FD8000]/10 dark:from-[#FFA500]/5 dark:to-[#FD8000]/5">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <SideNavigation items={navItems} />
          </div>
          <div className="md:col-span-3">
            <motion.section id="introduction" {...fadeIn}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                {t("introduction.title")}
              </h1>
              <div className="flex items-center justify-center mb-8">
                <Users className="h-16 w-16 text-[#FD8000] dark:text-[#FFA500]" />
              </div>
              <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
                {t("introduction.content")}
              </p>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt={t("introduction.imageAlt")}
                width={600}
                height={400}
                className="rounded-lg mb-8"
              />
            </motion.section>

            <motion.section id="key-benefits" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                {t("keyBenefits.title")}
              </h2>

              {[
                "streamlinedOrdering",
                "reducedOverhead",
                "employeeSatisfaction",
                "payrollIntegration",
                "customizablePrograms",
              ].map((benefitKey) => (
                <motion.div key={benefitKey} id={benefitKey} {...fadeIn}>
                  <h3 className="text-2xl font-semibold mb-4 text-[#FD8000] dark:text-[#FFA500]">
                    {t(`keyBenefits.${benefitKey}.title`)}
                  </h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                    {t(`keyBenefits.${benefitKey}.content`)}
                  </p>
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt={t(`keyBenefits.${benefitKey}.imageAlt`)}
                    width={500}
                    height={300}
                    className="rounded-lg mb-8"
                  />
                </motion.div>
              ))}
            </motion.section>

            <motion.section id="how-it-works" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                {t("howItWorks.title")}
              </h2>
              <ol className="list-decimal list-inside space-y-4 mb-8 text-gray-600 dark:text-gray-300">
                {Object.keys(t.raw("howItWorks.steps")).map((key) => (
                  <li key={key}>{t(`howItWorks.steps.${key}`)}</li>
                ))}
              </ol>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt={t("howItWorks.imageAlt")}
                width={600}
                height={400}
                className="rounded-lg mb-8"
              />
            </motion.section>

            <motion.section id="case-studies" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                {t("caseStudies.title")}
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {Object.keys(t.raw("caseStudies.items")).map((key) => (
                  <div
                    key={key}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-[#FD8000] dark:text-[#FFA500]">
                      {t(`caseStudies.items.${key}.title`)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t(`caseStudies.items.${key}.content`)}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section id="get-started" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                {t("getStarted.title")}
              </h2>
              <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
                {t("getStarted.content")}
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-[#FD8000] to-[#FFA500] hover:from-[#FD8000]/90 hover:to-[#FFA500]/90 text-white text-lg px-8 py-3"
              >
                <Link href="/book-demo">{t("getStarted.button")}</Link>
              </Button>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
