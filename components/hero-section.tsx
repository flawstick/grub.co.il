"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLongRightIcon as ArrowRightLong } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { GrubIcon } from "./icons";

export const HeroSection = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-[#FFA500]/10 to-[#FD8000]/10 dark:from-[#FFA500]/5 dark:to-[#FD8000]/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <GrubIcon size={100} />
          </motion.div>
          <motion.h1
            className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Streamline Meal Management for Your Team
          </motion.h1>
          <motion.p
            className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Effortless meal ordering, salary deductions, and restaurant
            partnerships—powered by Grub.
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
            >
              <Button
                asChild
                className="group flex bg-gradient-to-r from-[#FD8000] to-[#FFA500] hover:from-[#FD8000]/90 hover:to-[#FFA500]/90 text-white"
              >
                <Link href="/book-demo">
                  <span className="translate-x-[1rem] group-hover:translate-x-0 duration-300">
                    Book a Demo
                  </span>
                  <ArrowRightLong
                    className="flex duration-300 opacity-0 group-hover:opacity-100 translate-x-[1rem] group-hover:translate-x-0 w-full h-full"
                    style={{ width: "1.25rem", height: "1.5rem" }}
                  />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
