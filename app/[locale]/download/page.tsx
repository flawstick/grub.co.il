"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AppleIcon, SmartphoneIcon as AndroidIcon } from "lucide-react";

export default function DownloadPage() {
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
          Download Grub
        </motion.h1>
        <motion.p
          className="text-xl mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
          {...fadeInUp}
        >
          Get the Grub app on your device and start enjoying seamless meal
          ordering for your team.
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
                Download for iOS
              </>
            ) : os === "android" ? (
              <>
                <AndroidIcon className="mr-2 h-6 w-6" />
                Download for Android
              </>
            ) : (
              "Download Grub"
            )}
          </Button>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-6" {...fadeInUp}>
            <h2 className="text-3xl font-bold text-[#FD8000] dark:text-[#FFA500]">
              Grub for Android
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Enjoy the full Grub experience on your Android device. Order
              meals, manage your team's preferences, and streamline your
              corporate dining with ease.
            </p>
            <Button
              size="lg"
              className="bg-[#3DDC84] hover:bg-[#3DDC84]/90 text-white"
            >
              <AndroidIcon className="mr-2 h-5 w-5" />
              Get it on Google Play
            </Button>
          </motion.div>
          <motion.div
            className="bg-gray-200 dark:bg-gray-700 rounded-lg h-64 flex items-center justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Placeholder for Android app screenshot */}
            <span className="text-gray-500 dark:text-gray-400">
              Android App Screenshot
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
            {/* Placeholder for iOS app screenshot */}
            <span className="text-gray-500 dark:text-gray-400">
              iOS App Screenshot
            </span>
          </motion.div>
          <motion.div className="space-y-6" {...fadeInUp}>
            <h2 className="text-3xl font-bold text-[#FD8000] dark:text-[#FFA500]">
              Grub for iOS
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Experience Grub on your iPhone or iPad. Seamlessly integrate with
              your company's meal program and enjoy a wide variety of dining
              options at your fingertips.
            </p>
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
              <AppleIcon className="mr-2 h-5 w-5" />
              Download on the App Store
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 text-center">
        <motion.h2
          className="text-3xl font-bold mb-6 text-[#FD8000] dark:text-[#FFA500]"
          {...fadeInUp}
        >
          Why Choose the Grub App?
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-[#FD8000] dark:text-[#FFA500]">
              Easy Ordering
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Browse menus, customize your meals, and place orders with just a
              few taps.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-[#FD8000] dark:text-[#FFA500]">
              Team Management
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Easily manage your team's orders, preferences, and dietary
              restrictions all in one place.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-[#FD8000] dark:text-[#FFA500]">
              Real-time Updates
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get notifications about your order status, delivery times, and
              special offers.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
