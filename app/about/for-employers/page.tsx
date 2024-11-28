"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SideNavigation } from "@/components/side-navigation";

const navItems = [
  {
    id: "introduction",
    title: "Introduction",
  },
  {
    id: "key-benefits",
    title: "Key Benefits",
    subItems: [
      { id: "streamlined-ordering", title: "Streamlined Ordering" },
      { id: "reduced-overhead", title: "Reduced Overhead" },
      { id: "employee-satisfaction", title: "Employee Satisfaction" },
      { id: "payroll-integration", title: "Payroll Integration" },
      { id: "customizable-programs", title: "Customizable Programs" },
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

export default function ForEmployersPage() {
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
                Grub for Employers
              </h1>
              <div className="flex items-center justify-center mb-8">
                <Users className="h-16 w-16 text-[#FD8000] dark:text-[#FFA500]" />
              </div>
              <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
                Simplify meal management and boost employee satisfaction with
                Grub's comprehensive solution for corporate dining. Our platform
                is designed to streamline the entire process, from ordering to
                payment, making it easier than ever to provide quality meals for
                your team.
              </p>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Grub for Employers Overview"
                width={600}
                height={400}
                className="rounded-lg mb-8"
              />
            </motion.section>

            <motion.section id="key-benefits" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                Key Benefits
              </h2>

              <motion.div id="streamlined-ordering" {...fadeIn}>
                <h3 className="text-2xl font-semibold mb-4 text-[#FD8000] dark:text-[#FFA500]">
                  Streamlined Ordering
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Our intuitive platform allows employees to easily browse
                  menus, place orders, and customize their meals, all in one
                  place.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Streamlined Ordering Process"
                  width={500}
                  height={300}
                  className="rounded-lg mb-8"
                />
              </motion.div>

              <motion.div id="reduced-overhead" {...fadeIn}>
                <h3 className="text-2xl font-semibold mb-4 text-[#FD8000] dark:text-[#FFA500]">
                  Reduced Administrative Overhead
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Automate the meal management process, reducing the time and
                  resources needed to coordinate corporate dining.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Reduced Administrative Overhead"
                  width={500}
                  height={300}
                  className="rounded-lg mb-8"
                />
              </motion.div>

              <motion.div id="employee-satisfaction" {...fadeIn}>
                <h3 className="text-2xl font-semibold mb-4 text-[#FD8000] dark:text-[#FFA500]">
                  Increased Employee Satisfaction
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Offer a wide variety of meal options to cater to different
                  dietary needs and preferences, boosting overall employee
                  satisfaction.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Increased Employee Satisfaction"
                  width={500}
                  height={300}
                  className="rounded-lg mb-8"
                />
              </motion.div>

              <motion.div id="payroll-integration" {...fadeIn}>
                <h3 className="text-2xl font-semibold mb-4 text-[#FD8000] dark:text-[#FFA500]">
                  Easy Integration with Payroll Systems
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Seamlessly integrate Grub with your existing payroll systems
                  for hassle-free meal deductions and expense tracking.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Payroll Integration"
                  width={500}
                  height={300}
                  className="rounded-lg mb-8"
                />
              </motion.div>

              <motion.div id="customizable-programs" {...fadeIn}>
                <h3 className="text-2xl font-semibold mb-4 text-[#FD8000] dark:text-[#FFA500]">
                  Customizable Meal Programs
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Tailor your meal program to fit your company's unique needs,
                  whether it's daily lunches, special events, or flexible meal
                  allowances.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Customizable Meal Programs"
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
                  Set up your company account and customize your meal program
                </li>
                <li>Invite employees to join the platform</li>
                <li>Employees browse menus and place orders</li>
                <li>
                  Grub coordinates with partner restaurants for meal preparation
                  and delivery
                </li>
                <li>Automated payment processing and expense tracking</li>
                <li>
                  Access detailed analytics and reports on program usage and
                  satisfaction
                </li>
              </ol>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="How Grub Works for Employers"
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
                    TechCorp Streamlines Lunch
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    TechCorp implemented Grub and saw a 30% increase in employee
                    satisfaction and a 20% reduction in administrative costs
                    related to meal management.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-[#FD8000] dark:text-[#FFA500]">
                    StartupX Boosts Team Morale
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    StartupX used Grub to offer flexible meal allowances,
                    resulting in improved team collaboration and a more positive
                    work environment.
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section id="get-started" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                Get Started with Grub
              </h2>
              <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
                Ready to revolutionize your corporate dining experience? Book a
                demo with our team to see how Grub can benefit your company.
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-[#FD8000] to-[#FFA500] hover:from-[#FD8000]/90 hover:to-[#FFA500]/90 text-white text-lg px-8 py-3"
              >
                <Link href="/book-demo">Book a Demo</Link>
              </Button>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
