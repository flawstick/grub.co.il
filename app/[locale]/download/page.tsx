"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { AppleIcon, SmartphoneIcon as AndroidIcon } from "lucide-react";

export default function DownloadPage() {
  const t = useTranslations("DownloadPage");
  const [os, setOs] = useState<"ios" | "android" | "unknown">("unknown");

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) {
      setOs("ios");
    } else if (/android/.test(userAgent)) {
      setOs("android");
    }
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFA500]/10 to-[#FD8000]/10 dark:from-[#FFA500]/5 dark:to-[#FD8000]/5">
      <section className="container mx-auto px-4 py-16 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6 text-[#FD8000] dark:text-[#FFA500]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t("title")}
        </motion.h1>
        <motion.p
          className="text-xl mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
          {...fadeInUp}
        >
          {t("description")}
        </motion.p>
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#FD8000] to-[#FFA500] hover:from-[#FD8000]/90 hover:to-[#FFA500]/90 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {os === "ios" ? (
              <>
                <AppleIcon className="mr-2 h-6 w-6" />
                {t("buttons.ios")}
              </>
            ) : os === "android" ? (
              <>
                <AndroidIcon className="mr-2 h-6 w-6" />
                {t("buttons.android")}
              </>
            ) : (
              t("buttons.generic")
            )}
          </Button>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-6" {...fadeInUp}>
            <h2 className="text-3xl font-bold text-[#FD8000] dark:text-[#FFA500]">
              {t("sections.android.title")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {t("sections.android.description")}
            </p>
            <Button
              size="lg"
              className="bg-[#3DDC84] hover:bg-[#3DDC84]/90 text-white"
            >
              <AndroidIcon className="mr-2 h-5 w-5" />
              {t("buttons.androidStore")}
            </Button>
          </motion.div>
          <motion.div
            className="bg-gray-200 dark:bg-gray-700 rounded-lg h-64 flex items-center justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gray-500 dark:text-gray-400">
              {t("sections.android.placeholder")}
            </span>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="bg-gray-200 dark:bg-gray-700 rounded-lg h-64 flex items-center justify-center md:order-first"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gray-500 dark:text-gray-400">
              {t("sections.ios.placeholder")}
            </span>
          </motion.div>
          <motion.div className="space-y-6" {...fadeInUp}>
            <h2 className="text-3xl font-bold text-[#FD8000] dark:text-[#FFA500]">
              {t("sections.ios.title")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {t("sections.ios.description")}
            </p>
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
              <AppleIcon className="mr-2 h-5 w-5" />
              {t("buttons.iosStore")}
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 text-center">
        <motion.h2
          className="text-3xl font-bold mb-6 text-[#FD8000] dark:text-[#FFA500]"
          {...fadeInUp}
        >
          {t("whyChoose.title")}
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {["easyOrdering", "teamManagement", "realTimeUpdates"].map((key) => (
            <div
              key={key}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#FD8000] dark:text-[#FFA500]">
                {t(`whyChoose.items.${key}.title`)}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t(`whyChoose.items.${key}.description`)}
              </p>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
