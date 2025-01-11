"use client";

import { motion } from "framer-motion";
import { Utensils } from "lucide-react";
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
      { id: "easy-ordering", title: "Easy Ordering" },
      { id: "meal-variety", title: "Meal Variety" },
      { id: "dietary-options", title: "Dietary Options" },
      { id: "convenient-payment", title: "Convenient Payment" },
      { id: "team-bonding", title: "Team Bonding" },
    ],
  },
  {
    id: "how-it-works",
    title: "How It Works",
  },
  {
    id: "testimonials",
    title: "Employee Testimonials",
  },
  {
    id: "get-started",
    title: "Get Started",
  },
];

export default function ForEmployeesPage() {
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
                Grub for Employees
              </h1>
              <div className="flex items-center justify-center mb-8">
                <Utensils className="h-16 w-16 text-[#FD8000] dark:text-[#FFA500]" />
              </div>
              <p className="text-xl mb-8 text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                Enjoy a wide variety of delicious meals with easy ordering and
                convenient payment options. Grub makes your workday dining
                experience seamless and enjoyable.
              </p>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Grub for Employees Overview"
                width={600}
                height={400}
                className="rounded-lg mb-8"
              />
            </motion.section>

            <motion.section id="key-benefits" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                Key Benefits
              </h2>

              <motion.div id="easy-ordering" {...fadeIn}>
                <h3 className="text-2xl font-semibold mb-4 text-[#FD8000] dark:text-[#FFA500]">
                  Easy Ordering
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Browse menus, customize your meals, and place orders with just
                  a few taps on our user-friendly app.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Easy Ordering Process"
                  width={500}
                  height={300}
                  className="rounded-lg mb-8"
                />
              </motion.div>

              <motion.div id="meal-variety" {...fadeIn}>
                <h3 className="text-2xl font-semibold mb-4 text-[#FD8000] dark:text-[#FFA500]">
                  Meal Variety
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Choose from a wide range of cuisines and restaurants, ensuring
                  you never get bored with your lunch options.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Meal Variety Options"
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
                  Easily find meals that meet your dietary requirements, whether
                  you're vegetarian, vegan, gluten-free, or have other
                  preferences.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Dietary Options"
                  width={500}
                  height={300}
                  className="rounded-lg mb-8"
                />
              </motion.div>

              <motion.div id="convenient-payment" {...fadeIn}>
                <h3 className="text-2xl font-semibold mb-4 text-[#FD8000] dark:text-[#FFA500]">
                  Convenient Payment
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Enjoy hassle-free payment through automatic payroll deductions
                  or other flexible payment options.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Convenient Payment Options"
                  width={500}
                  height={300}
                  className="rounded-lg mb-8"
                />
              </motion.div>

              <motion.div id="team-bonding" {...fadeIn}>
                <h3 className="text#FFA500]">Team Bonding</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Coordinate meals with your colleagues and enjoy lunch
                  together, fostering better team relationships.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Team Bonding Over Meals"
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
                <li>Download the Grub app and create your account</li>
                <li>Browse available restaurants and menus</li>
                <li>Customize your meal and place your order</li>
                <li>Choose your preferred payment method</li>
                <li>Receive notifications about your order status</li>
                <li>Enjoy your meal!</li>
              </ol>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="How Grub Works for Employees"
                width={600}
                height={400}
                className="rounded-lg mb-8"
              />
            </motion.section>

            <motion.section id="testimonials" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                Employee Testimonials
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-[#FD8000] dark:text-[#FFA500]">
                    Sarah K., Marketing Manager
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    "Grub has made lunchtime so much easier and more enjoyable.
                    I love the variety of options and how simple it is to use!"
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-[#FD8000] dark:text-[#FFA500]">
                    Mike T., Software Developer
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    "As someone with dietary restrictions, Grub has been a
                    game-changer. I can easily find meals that meet my needs."
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section id="get-started" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                Get Started with Grub
              </h2>
              <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
                Ready to revolutionize your workday dining experience? Download
                the Grub app today and start enjoying delicious, convenient
                meals at work!
              </p>
              <div className="flex justify-center space-x-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-[#FD8000] to-[#FFA500] hover:from-[#FD8000]/90 hover:to-[#FFA500]/90 text-white text-lg px-8 py-3"
                >
                  <Link href="/download">Download App</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="text-[#FD8000] border-[#FD8000] hover:bg-[#FD8000] hover:text-white dark:text-[#FFA500] dark:border-[#FFA500] dark:hover:bg-[#FFA500] dark:hover:text-gray-900"
                >
                  <Link href="/contact">Learn More</Link>
                </Button>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
