"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
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
      { id: "group-ordering", title: "Group Ordering" },
      { id: "dietary-management", title: "Dietary Management" },
      { id: "budget-control", title: "Budget Control" },
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

export default function TeamManagementPage() {
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
                Team Management
              </h1>
              <div className="flex items-center justify-center mb-8">
                <Users className="h-16 w-16 text-[#FD8000] dark:text-[#FFA500]" />
              </div>
              <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
                Grub's Team Management feature allows you to easily manage
                teams, departments, and individual meal preferences all in one
                place, streamlining your corporate dining experience.
              </p>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Team Management Overview"
                width={600}
                height={400}
                className="rounded-lg mb-8"
              />
            </motion.section>

            <motion.section id="key-features" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                Key Features
              </h2>

              <motion.div id="group-ordering" {...fadeIn}>
                <h3 className="text-2xl font-semibold mb-4 text-[#FD8000] dark:text-[#FFA500]">
                  Group Ordering
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Easily coordinate meals for team meetings, events, or daily
                  lunches with our intuitive group ordering system.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Group Ordering Feature"
                  width={500}
                  height={300}
                  className="rounded-lg mb-8"
                />
              </motion.div>

              <motion.div id="dietary-management" {...fadeIn}>
                <h3 className="text-2xl font-semibold mb-4 text-[#FD8000] dark:text-[#FFA500]">
                  Dietary Management
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Keep track of team members' dietary restrictions and
                  preferences to ensure everyone's needs are met.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Dietary Management System"
                  width={500}
                  height={300}
                  className="rounded-lg mb-8"
                />
              </motion.div>

              <motion.div id="budget-control" {...fadeIn}>
                <h3 className="text-2xl font-semibold mb-4 text-[#FD8000] dark:text-[#FFA500]">
                  Budget Control
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Set and manage meal budgets for individuals, teams, or
                  departments to keep costs under control.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Budget Control Dashboard"
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
                <li>Set up teams and departments within the Grub platform</li>
                <li>
                  Invite team members and assign roles (e.g., team lead, member)
                </li>
                <li>
                  Configure meal preferences and dietary restrictions for each
                  member
                </li>
                <li>Set budgets and ordering permissions as needed</li>
                <li>
                  Use the platform to coordinate group orders and manage team
                  meals
                </li>
              </ol>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="How Team Management Works"
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
                  Improved team coordination and communication around meals
                </li>
                <li>
                  Enhanced employee satisfaction through personalized meal
                  experiences
                </li>
                <li>
                  Better cost control and budget management for corporate dining
                </li>
                <li>Time savings for administrators and team leads</li>
                <li>
                  Increased visibility into team dining habits and preferences
                </li>
              </ul>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Benefits of Team Management"
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
                Ready to revolutionize how you manage team meals and corporate
                dining? Contact our team to learn more about implementing Grub's
                Team Management feature for your organization.
              </p>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
