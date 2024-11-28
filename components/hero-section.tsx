import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#FD8000]/10 dark:bg-[#FFA500]/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Streamline Meal Management for Your Team
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
            Effortless meal ordering, salary deductions, and restaurant
            partnerships—powered by Grub.
          </p>
          <div className="relative">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#FD8000] to-[#FFA500] opacity-75 blur-lg" />
            <Button
              asChild
              className="relative bg-gradient-to-r from-[#FD8000] to-[#FFA500] hover:from-[#FD8000]/90 hover:to-[#FFA500]/90 text-white"
            >
              <Link href="/book-demo">
                <span className="translate-x-0.5">Book a Demo</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
