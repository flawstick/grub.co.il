"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SideNavigation } from "@/components/side-navigation";
import { useTranslations } from "next-intl";

const navItems = [
  {
    id: "introduction",
    title: "navigation.introduction",
  },
  {
    id: "background",
    title: "navigation.background",
  },
  {
    id: "vision",
    title: "navigation.vision",
  },
  {
    id: "achievements",
    title: "navigation.achievements",
  },
  {
    id: "thoughts",
    title: "navigation.thoughts",
  },
  {
    id: "contact",
    title: "navigation.contact",
  },
];

export default function AmirIsaacPage() {
  const t = useTranslations("AmirIsaacPage");

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
            <SideNavigation
              items={navItems.map((item) => ({
                ...item,
                title: t(item.title),
              }))}
            />
          </div>
          <div className="md:col-span-3">
            <motion.section id="introduction" {...fadeIn}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-[#FD8000] dark:text-[#FFA500]">
                {t("introduction.name")}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-gray-600 dark:text-gray-300">
                {t("introduction.role")}
              </h2>
              <div className="flex justify-center mb-12">
                <div className="relative w-64 h-64 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt={t("introduction.imageAlt")}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <p className="text-xl mb-8 text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                {t("introduction.content")}
              </p>
            </motion.section>

            <motion.section id="background" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                {t("background.title")}
              </h2>
              <ul className="list-disc list-inside space-y-4 mb-8 text-gray-600 dark:text-gray-300">
                <li>{t("background.point1")}</li>
                <li>{t("background.point2")}</li>
                <li>{t("background.point3")}</li>
                <li>{t("background.point4")}</li>
              </ul>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt={t("background.imageAlt")}
                width={600}
                height={400}
                className="rounded-lg mb-8"
              />
            </motion.section>

            <motion.section id="vision" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                {t("vision.title")}
              </h2>
              <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
                {t("vision.content")}
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-[#FD8000] dark:text-[#FFA500]">
                    {t("vision.detail1.title")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t("vision.detail1.content")}
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-[#FD8000] dark:text-[#FFA500]">
                    {t("vision.detail2.title")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t("vision.detail2.content")}
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section id="achievements" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                {t("achievements.title")}
              </h2>
              <ul className="list-disc list-inside space-y-4 mb-8 text-gray-600 dark:text-gray-300">
                <li>{t("achievements.point1")}</li>
                <li>{t("achievements.point2")}</li>
                <li>{t("achievements.point3")}</li>
                <li>{t("achievements.point4")}</li>
              </ul>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt={t("achievements.imageAlt")}
                width={600}
                height={400}
                className="rounded-lg mb-8"
              />
            </motion.section>

            <motion.section id="thoughts" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                {t("thoughts.title")}
              </h2>
              <blockquote className="text-xl italic text-center max-w-2xl mx-auto mb-8 text-gray-600 dark:text-gray-300">
                {t("thoughts.quote")}
              </blockquote>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-[#FD8000] dark:text-[#FFA500]">
                    {t("thoughts.detail1.title")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t("thoughts.detail1.content")}
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-[#FD8000] dark:text-[#FFA500]">
                    {t("thoughts.detail2.title")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t("thoughts.detail2.content")}
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section id="contact" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                {t("contact.title")}
              </h2>
              <p className="text-xl mb-8 text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                {t("contact.content")}
              </p>
              <div className="flex justify-center">
                <Button
                  asChild
                  className="bg-gradient-to-r from-[#FD8000] to-[#FFA500] hover:from-[#FD8000]/90 hover:to-[#FFA500]/90 text-white text-lg px-8 py-3"
                >
                  <Link href="/contact">{t("contact.button")}</Link>
                </Button>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
