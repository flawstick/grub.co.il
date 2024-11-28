"use client";

import { motion } from "framer-motion";
import { Building } from "lucide-react";
import Image from "next/image";
import { SideNavigation } from "@/components/side-navigation";

const navItems = [
  {
    id: "introduction",
    title: "Introduction",
  },
  {
    id: "benefits",
    title: "Benefits",
    subItems: [
      { id: "cost-savings", title: "Cost Savings" },
      { id: "increased-participation", title: "Increased Participation" },
      { id: "local-support", title: "Local Business Support" },
    ],
  },
  {
    id: "how-it-works",
    title: "How It Works",
  },
  {
    id: "case-studies",
    title: "Case Studies",
  },
  {
    id: "get-started",
    title: "Get Started",
  },
];

export default function LowRestaurantFeesPage() {
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
                Low Restaurant Fees
              </h1>
              <div className="flex items-center justify-center mb-8">
                <Building className="h-16 w-16 text-[#FD8000] dark:text-[#FFA500]" />
              </div>
              <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
                Grub's Low Restaurant Fees feature allows you to partner with
                local restaurants at competitive prices, benefiting both your
                company and local businesses.
              </p>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Low Restaurant Fees Overview"
                width={600}
                height={400}
                className="rounded-lg mb-8"
              />
            </motion.section>

            <motion.section id="benefits" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                Benefits
              </h2>

              <motion.div id="cost-savings" {...fadeIn}>
                <h3 className="text-2xl font-semibold mb-4 text-[#FD8000] dark:text-[#FFA500]">
                  Cost Savings
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  By negotiating lower fees with restaurants, Grub helps your
                  company save on meal expenses without compromising on quality
                  or variety.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Cost Savings Illustration"
                  width={500}
                  height={300}
                  className="rounded-lg mb-8"
                />
              </motion.div>

              <motion.div id="increased-participation" {...fadeIn}>
                <h3 className="text-2xl font-semibold mb-4 text-[#FD8000] dark:text-[#FFA500]">
                  Increased Participation
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Lower fees mean more affordable meals for employees,
                  encouraging higher participation in your company's meal
                  program.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Increased Participation Graph"
                  width={500}
                  height={300}
                  className="rounded-lg mb-8"
                />
              </motion.div>

              <motion.div id="local-support" {...fadeIn}>
                <h3 className="text-2xl font-semibold mb-4 text-[#FD8000] dark:text-[#FFA500]">
                  Local Business Support
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  By partnering with local restaurants, you're supporting your
                  community's economy while providing diverse meal options to
                  your employees.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Local Business Support"
                  width={500}
                  height={300}
                  className="rounded-lg mb-8"
                />
              </motion.div>
            </motion.section>

            <motion.section id="how-it-works" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                How It Works
              </h2>
              <ol className="list-decimal list-inside space-y-4 mb-8 text-gray-600 dark:text-gray-300">
                <li>
                  Grub negotiates competitive rates with local restaurants
                </li>
                <li>Restaurants are integrated into the Grub platform</li>
                <li>Your company selects preferred restaurant partners</li>
                <li>
                  Employees order from these restaurants at discounted rates
                </li>
                <li>Grub handles all payments and logistics</li>
              </ol>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="How Low Restaurant Fees Work"
                width={600}
                height={400}
                className="rounded-lg mb-8"
              />
            </motion.section>

            <motion.section id="case-studies" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                Case Studies
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-[#FD8000] dark:text-[#FFA500]">
                    TechCorp Savings
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    TechCorp saved 20% on their annual meal expenses after
                    implementing Grub's Low Restaurant Fees program.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-[#FD8000] dark:text-[#FFA500]">
                    Local Bistro Growth
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    A local bistro saw a 30% increase in orders after partnering
                    with Grub and offering competitive rates to nearby
                    businesses.
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section id="get-started" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                Get Started
              </h2>
              <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
                Ready to start saving on your company's meal expenses while
                supporting local businesses? Contact our team to learn more
                about implementing Grub's Low Restaurant Fees program for your
                organization.
              </p>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
