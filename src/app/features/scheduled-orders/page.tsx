"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
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
      { id: "recurring-orders", title: "Recurring Orders" },
      { id: "flexible-scheduling", title: "Flexible Scheduling" },
      { id: "customization", title: "Customization Options" },
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

export default function ScheduledOrdersPage() {
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
                Scheduled Orders
              </h1>
              <div className="flex items-center justify-center mb-8">
                <Clock className="h-16 w-16 text-[#FD8000] dark:text-[#FFA500]" />
              </div>
              <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
                Grub's Scheduled Orders feature allows you to set up recurring
                orders for your team, streamlining the meal planning process and
                ensuring everyone gets their favorite meals on time.
              </p>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Scheduled Orders Overview"
                width={600}
                height={400}
                className="rounded-lg mb-8"
              />
            </motion.section>

            <motion.section id="key-features" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                Key Features
              </h2>

              <motion.div id="recurring-orders" {...fadeIn}>
                <h3 className="text-2xl font-semibold mb-4 text-[#FD8000] dark:text-[#FFA500]">
                  Recurring Orders
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Set up daily, weekly, or monthly meal orders for individuals
                  or teams, ensuring consistent meal delivery without manual
                  intervention.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Recurring Orders Feature"
                  width={500}
                  height={300}
                  className="rounded-lg mb-8"
                />
              </motion.div>

              <motion.div id="flexible-scheduling" {...fadeIn}>
                <h3 className="text-2xl font-semibold mb-4 text-[#FD8000] dark:text-[#FFA500]">
                  Flexible Scheduling
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Choose specific days, times, and frequencies for meal
                  deliveries to accommodate various work schedules and team
                  needs.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Flexible Scheduling Options"
                  width={500}
                  height={300}
                  className="rounded-lg mb-8"
                />
              </motion.div>

              <motion.div id="customization" {...fadeIn}>
                <h3 className="text-2xl font-semibold mb-4 text-[#FD8000] dark:text-[#FFA500]">
                  Customization Options
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Tailor recurring orders with meal rotations, dietary
                  preferences, and the ability to easily modify or pause
                  schedules as needed.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Customization Options Interface"
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
                  Access the Scheduled Orders feature in your Grub dashboard
                </li>
                <li>
                  Select the individuals or teams for whom you want to set up
                  recurring orders
                </li>
                <li>
                  Choose the frequency, days, and times for meal deliveries
                </li>
                <li>
                  Select meals or set up meal rotations based on preferences
                </li>
                <li>Review and confirm the scheduled orders</li>
                <li>
                  Grub automatically processes and delivers meals according to
                  the schedule
                </li>
              </ol>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="How Scheduled Orders Work"
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
                  Time-saving: Eliminate the need for daily manual order
                  placement
                </li>
                <li>
                  Consistency: Ensure regular meal deliveries for your team
                </li>
                <li>
                  Customization: Cater to individual preferences and dietary
                  needs
                </li>
                <li>
                  Cost control: Better budget management with predictable
                  ordering
                </li>
                <li>
                  Improved planning: Streamline meal logistics for your
                  organization
                </li>
                <li>
                  Flexibility: Easily adjust schedules to accommodate changing
                  needs
                </li>
              </ul>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Benefits of Scheduled Orders"
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
                Ready to simplify your team's meal planning with Scheduled
                Orders? Contact our team to learn more about implementing this
                feature for your organization and start enjoying the benefits of
                automated meal management.
              </p>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
