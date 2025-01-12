"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowLongRightIcon as ArrowRightLong,
  ArrowLongLeftIcon as ArrowLeftLong,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { GrubIcon } from "./icons";
import { useTranslations } from "next-intl";
import { useDirection } from "@/hooks/use-direction";

export const HeroSection = () => {
  const t = useTranslations("HeroSection");
  const { direction } = useDirection();

  return (
    <section
      className="w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero.jpg')",
      }}
    >
      <div className="absolute top-[4rem] w-full h-screen inset-0 bg-black/50"></div>

      <div className="container px-4 md:px-6 inset-0 z-10">
        <div className="flex flex-col items-center space-y-4 text-center">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <GrubIcon size={100} />
          </motion.div>
          <motion.h1
            className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-100"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {t("title")}
          </motion.h1>
          <motion.p
            className="mx-auto max-w-[700px] text-gray-200 dark:text-gray-400 md:text-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {t("description")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
              className="flex flex-row items-center gap-x-4 "
            >
              <Button
                asChild
                className="group flex items-center bg-gradient-to-r from-[#FD8000] to-[#FFA500] hover:from-[#FD8000]/90 hover:to-[#FFA500]/90 text-white"
              >
                <Link href="/book-demo">
                  <span className="ltr:translate-x-[1rem] rtl:-translate-x-[1rem] group-hover:translate-x-0 duration-300">
                    {t("cta")}
                  </span>
                  {direction === "ltr" ? (
                    <ArrowRightLong
                      className="flex duration-300 opacity-0 group-hover:opacity-100 translate-x-[1rem] group-hover:translate-x-0 w-full h-full"
                      style={{ width: "1.25rem", height: "1.5rem" }}
                    />
                  ) : (
                    <ArrowLeftLong
                      className="flex duration-300 opacity-0 group-hover:opacity-100 translate-x-[-1rem] group-hover:translate-x-0 w-full h-full"
                      style={{ width: "1.25rem", height: "1.5rem" }}
                    />
                  )}
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
