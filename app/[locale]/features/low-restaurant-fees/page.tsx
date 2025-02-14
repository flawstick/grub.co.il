"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Building } from "lucide-react";
import Image from "next/image";
import { SideNavigation } from "@/components/side-navigation";

export default function LowRestaurantFeesPage() {
  const t = useTranslations("LowRestaurantFeesPage");

  const navItems = [
    {
      id: "introduction",
      title: t("nav.introduction"),
    },
    {
      id: "benefits",
      title: t("nav.benefits"),
      subItems: [
        { id: "cost-savings", title: t("nav.costSavings") },
        {
          id: "increased-participation",
          title: t("nav.increasedParticipation"),
        },
        { id: "local-support", title: t("nav.localSupport") },
      ],
    },
    {
      id: "how-it-works",
      title: t("nav.howItWorks"),
    },
    {
      id: "case-studies",
      title: t("nav.caseStudies"),
    },
    {
      id: "get-started",
      title: t("nav.getStarted"),
    },
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
                {t("title")}
              </h1>
              <div className="flex items-center justify-center mb-8">
                <Building className="h-16 w-16 text-[#FD8000] dark:text-[#FFA500]" />
              </div>
              <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
                {t("introduction")}
              </p>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt={t("introductionAlt")}
                width={600}
                height={400}
                className="rounded-lg mb-8"
              />
            </motion.section>

            <motion.section id="benefits" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                {t("benefits.title")}
              </h2>

              {["costSavings", "increasedParticipation", "localSupport"].map(
                (benefit) => (
                  <motion.div id={benefit} {...fadeIn} key={benefit}>
                    <h3 className="text-2xl font-semibold mb-4 text-[#FD8000] dark:text-[#FFA500]">
                      {t(`benefits.${benefit}.title`)}
                    </h3>
                    <p className="mb-4 text-gray-600 dark:text-gray-300">
                      {t(`benefits.${benefit}.description`)}
                    </p>
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt={t(`benefits.${benefit}.alt`)}
                      width={500}
                      height={300}
                      className="rounded-lg mb-8"
                    />
                  </motion.div>
                ),
              )}
            </motion.section>

            <motion.section id="how-it-works" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                {t("howItWorks.title")}
              </h2>
              <ol className="list-decimal list-inside space-y-4 mb-8 text-gray-600 dark:text-gray-300">
                <li>{t("howItWorks.step1")}</li>
                <li>{t("howItWorks.step2")}</li>
                <li>{t("howItWorks.step3")}</li>
                <li>{t("howItWorks.step4")}</li>
                <li>{t("howItWorks.step5")}</li>
              </ol>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt={t("howItWorks.alt")}
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
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-[#FD8000] dark:text-[#FFA500]">
                    {t("caseStudies.techCorpSavings.title")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t("caseStudies.techCorpSavings.description")}
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-[#FD8000] dark:text-[#FFA500]">
                    {t("caseStudies.localBistroGrowth.title")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t("caseStudies.localBistroGrowth.description")}
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section id="get-started" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                {t("getStarted.title")}
              </h2>
              <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
                {t("getStarted.description")}
              </p>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
