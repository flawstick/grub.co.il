"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { CreditCard } from "lucide-react";
import Image from "next/image";
import { SideNavigation } from "@/components/side-navigation";

export default function IntegratedPayrollDeductionsPage() {
  const t = useTranslations("IntegratedPayrollDeductionsPage");

  const navItems = [
    {
      id: "introduction",
      title: t("nav.introduction"),
    },
    {
      id: "benefits",
      title: t("nav.benefits"),
      subItems: [
        { id: "simplified-accounting", title: t("nav.simplifiedAccounting") },
        { id: "employee-convenience", title: t("nav.employeeConvenience") },
        { id: "tax-benefits", title: t("nav.taxBenefits") },
      ],
    },
    {
      id: "how-it-works",
      title: t("nav.howItWorks"),
    },
    {
      id: "security",
      title: t("nav.security"),
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
                <CreditCard className="h-16 w-16 text-[#FD8000] dark:text-[#FFA500]" />
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

              {[
                "simplifiedAccounting",
                "employeeConvenience",
                "taxBenefits",
              ].map((benefit) => (
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
              ))}
            </motion.section>

            <motion.section id="how-it-works" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                {t("howItWorks.title")}
              </h2>
              <ol className="list-decimal list-inside space-y-4 mb-8 text-gray-600 dark:text-gray-300">
                {t.rich("howItWorks.steps", {
                  li: (chunk) => <li>{chunk}</li>,
                })}
              </ol>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt={t("howItWorks.alt")}
                width={600}
                height={400}
                className="rounded-lg mb-8"
              />
            </motion.section>

            <motion.section id="security" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                {t("security.title")}
              </h2>
              <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
                {t("security.description")}
              </p>
              <ul className="list-disc list-inside space-y-4 mb-8 text-gray-600 dark:text-gray-300">
                {t.rich("security.items", {
                  li: (chunk) => <li>{chunk}</li>,
                })}
              </ul>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt={t("security.alt")}
                width={600}
                height={400}
                className="rounded-lg mb-8"
              />
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
