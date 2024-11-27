"use client";

import { motion } from "framer-motion";
import { ChefHat } from "lucide-react";
import Image from "next/image";
import { SideNavigation } from "@/components/side-navigation";

const navItems = [
  {
    id: "introduction",
    title: "Introduction",
  },
  {
    id: "key-features",
    title: "Key Features",
    subItems: [
      { id: "menu-creation", title: "Menu Creation" },
      { id: "dietary-options", title: "Dietary Options" },
      { id: "seasonal-rotations", title: "Seasonal Rotations" },
    ],
  },
  {
    id: "how-it-works",
    title: "How It Works",
  },
  {
    id: "benefits",
    title: "Benefits",
  },
  {
    id: "get-started",
    title: "Get Started",
  },
];

export default function CustomizableMenusPage() {
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
                Customizable Menus
              </h1>
              <div className="flex items-center justify-center mb-8">
                <ChefHat className="h-16 w-16 text-[#FD8000] dark:text-[#FFA500]" />
              </div>
              <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
                Grub's Customizable Menus feature allows you to create tailored
                meal options that perfectly suit your team's preferences and
                dietary needs, enhancing the overall dining experience.
              </p>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Customizable Menus Overview"
                width={600}
                height={400}
                className="rounded-lg mb-8"
              />
            </motion.section>

            <motion.section id="key-features" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                Key Features
              </h2>

              <motion.div id="menu-creation" {...fadeIn}>
                <h3 className="text-2xl font-semibold mb-4 text-[#FD8000] dark:text-[#FFA500]">
                  Menu Creation
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Design unique menus that reflect your company culture and
                  cater to your employees' tastes, working with our partner
                  restaurants to curate the perfect selection.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Menu Creation Interface"
                  width={500}
                  height={300}
                  className="rounded-lg mb-8"
                />
              </motion.div>

              <motion.div id="dietary-options" {...fadeIn}>
                <h3 className="text-2xl font-semibold mb-4 text-[#FD8000] dark:text-[#FFA500]">
                  Dietary Options
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Easily incorporate a wide range of dietary options, including
                  vegetarian, vegan, gluten-free, and allergen-friendly meals to
                  accommodate all team members.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Dietary Options Selection"
                  width={500}
                  height={300}
                  className="rounded-lg mb-8"
                />
              </motion.div>

              <motion.div id="seasonal-rotations" {...fadeIn}>
                <h3 className="text-2xl font-semibold mb-4 text-[#FD8000] dark:text-[#FFA500]">
                  Seasonal Rotations
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Keep your menu fresh and exciting with seasonal rotations,
                  featuring locally sourced ingredients and special
                  holiday-themed options.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Seasonal Menu Rotation"
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
                  Consult with our menu specialists to understand your team's
                  preferences
                </li>
                <li>
                  Work with partner restaurants to create custom dishes or
                  modify existing ones
                </li>
                <li>Set up your personalized menu within the Grub platform</li>
                <li>
                  Configure dietary options and allergen information for each
                  item
                </li>
                <li>
                  Implement seasonal rotations and special event menus as
                  desired
                </li>
                <li>
                  Gather feedback from your team and make adjustments as needed
                </li>
              </ol>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="How Customizable Menus Work"
                width={600}
                height={400}
                className="rounded-lg mb-8"
              />
            </motion.section>

            <motion.section id="benefits" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                Benefits
              </h2>
              <ul className="list-disc list-inside space-y-4 mb-8 text-gray-600 dark:text-gray-300">
                <li>
                  Increased employee satisfaction with personalized meal options
                </li>
                <li>
                  Improved inclusivity by catering to various dietary needs and
                  preferences
                </li>
                <li>
                  Enhanced company culture through curated dining experiences
                </li>
                <li>Better control over nutrition and ingredient quality</li>
                <li>
                  Flexibility to adapt menus for special events or company
                  milestones
                </li>
                <li>Support for local restaurants and seasonal produce</li>
              </ul>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Benefits of Customizable Menus"
                width={600}
                height={400}
                className="rounded-lg mb-8"
              />
            </motion.section>

            <motion.section id="get-started" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                Get Started
              </h2>
              <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
                Ready to create a unique dining experience for your team with
                Customizable Menus? Contact our team to start designing your
                perfect menu and elevate your corporate dining program.
              </p>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
