"use client";

import { motion } from "framer-motion";
import { Utensils } from "lucide-react";
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
      { id: "intuitive-ordering", title: "Intuitive Ordering" },
      { id: "customization", title: "Meal Customization" },
      { id: "group-orders", title: "Group Orders" },
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

export default function EasyEmployeeMealsPage() {
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
                Easy Employee Meals
              </h1>
              <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
                Simplify meal ordering for your entire team with our intuitive
                platform. Grub makes it easy for employees to browse menus,
                place orders, and enjoy delicious meals without the hassle.
              </p>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Easy Employee Meals Overview"
                width={600}
                height={400}
                className="rounded-lg mb-8"
              />
            </motion.section>

            <motion.section id="key-features" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                Key Features
              </h2>

              <motion.div id="intuitive-ordering" {...fadeIn}>
                <h3 className="text-2xl font-semibold mb-4 text-[#FD8000] dark:text-[#FFA500]">
                  Intuitive Ordering
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Our user-friendly interface makes it simple for employees to
                  browse menus, select meals, and place orders in just a few
                  clicks.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Intuitive Ordering Interface"
                  width={500}
                  height={300}
                  className="rounded-lg mb-8"
                />
              </motion.div>

              <motion.div id="customization" {...fadeIn}>
                <h3 className="text-2xl font-semibold mb-4 text-[#FD8000] dark:text-[#FFA500]">
                  Meal Customization
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Employees can easily customize their meals to fit their
                  dietary preferences and restrictions, ensuring everyone gets
                  exactly what they want.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Meal Customization Options"
                  width={500}
                  height={300}
                  className="rounded-lg mb-8"
                />
              </motion.div>

              <motion.div id="group-orders" {...fadeIn}>
                <h3 className="text-2xl font-semibold mb-4 text-[#FD8000] dark:text-[#FFA500]">
                  Group Orders
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Coordinate team lunches and meetings effortlessly with our
                  group ordering feature, allowing multiple employees to add to
                  a single order.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Group Ordering Feature"
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
                <li>Employees log in to the Grub platform</li>
                <li>Browse available restaurants and menus</li>
                <li>Select and customize meals</li>
                <li>Add items to cart and review order</li>
                <li>
                  Choose payment method (including payroll deduction if enabled)
                </li>
                <li>Submit order and receive confirmation</li>
                <li>Enjoy the meal when it arrives!</li>
              </ol>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="How Easy Employee Meals Work"
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
                  Save time and reduce stress associated with meal planning
                </li>
                <li>
                  Increase employee satisfaction with a wide variety of food
                  options
                </li>
                <li>
                  Promote team bonding through shared meals and group orders
                </li>
                <li>
                  Ensure dietary needs and preferences are met for all employees
                </li>
                <li>
                  Streamline the payment process with integrated payroll
                  deductions
                </li>
                <li>
                  Support local restaurants and contribute to the community
                </li>
              </ul>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Benefits of Easy Employee Meals"
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
                Ready to simplify meal management for your team? Contact our
                sales team to learn more about implementing Grub's Easy Employee
                Meals feature for your organization.
              </p>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
