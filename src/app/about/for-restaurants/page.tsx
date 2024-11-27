"use client";

import { Store } from "lucide-react";
import { motion } from "framer-motion";
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
      { id: "expanded-customer-base", title: "Expanded Customer Base" },
      { id: "streamlined-operations", title: "Streamlined Operations" },
      { id: "increased-revenue", title: "Increased Revenue" },
      { id: "brand-visibility", title: "Brand Visibility" },
      { id: "data-insights", title: "Data Insights" },
    ],
  },
  {
    id: "how-it-works",
    title: "How It Works",
  },
  {
    id: "success-stories",
    title: "Success Stories",
  },
  {
    id: "join-grub",
    title: "Join Grub",
  },
];

export default function ForRestaurantsPage() {
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
                Grub for Restaurants
              </h1>
              <div className="flex items-center justify-center mb-8">
                <Store className="h-16 w-16 text-[#FD8000] dark:text-[#FFA500]" />
              </div>
              <p className="text-xl mb-8 text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                Expand your customer base and streamline your operations with
                Grub. Join our network of restaurants serving delicious meals to
                corporate clients.
              </p>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Grub for Restaurants Overview"
                width={600}
                height={400}
                className="rounded-lg mb-8"
              />
            </motion.section>

            <motion.section id="key-benefits" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                Key Benefits
              </h2>

              <motion.div id="expanded-customer-base" {...fadeIn}>
                <h3 className="text#FFA500]">Expanded Customer Base</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Reach corporate clients and their employees, significantly
                  expanding your potential customer base.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Expanded Customer Base"
                  width={500}
                  height={300}
                  className="rounded-lg mb-8"
                />
              </motion.div>

              <motion.div id="streamlined-operations" {...fadeIn}>
                <h3 className="text#FFA500]">Streamlined Operations</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Manage orders, payments, and deliveries through our
                  easy-to-use platform, reducing administrative overhead.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Streamlined Operations"
                  width={500}
                  height={300}
                  className="rounded-lg mb-8"
                />
              </motion.div>

              <motion.div id="increased-revenue" {...fadeIn}>
                <h3 className="text#FFA500]">Increased Revenue</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Boost your sales with a steady stream of corporate orders,
                  especially during typically slower business hours.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Increased Revenue"
                  width={500}
                  height={300}
                  className="rounded-lg mb-8"
                />
              </motion.div>

              <motion.div id="brand-visibility" {...fadeIn}>
                <h3 className="text#FFA500]">Brand Visibility</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Increase your restaurant's visibility among corporate clients
                  and their employees, potentially leading to more direct
                  business.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Brand Visibility"
                  width={500}
                  height={300}
                  className="rounded-lg mb-8"
                />
              </motion.div>

              <motion.div id="data-insights" {...fadeIn}>
                <h3 className="text#FFA500]">Data Insights</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Gain valuable insights into customer preferences and ordering
                  patterns to optimize your menu and operations.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Data Insights"
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
                <li>Sign up as a Grub restaurant partner</li>
                <li>Set up your menu and pricing on our platform</li>
                <li>Receive orders from corporate clients</li>
                <li>Prepare and package meals for delivery or pickup</li>
                <li>Get paid quickly and securely through our system</li>
                <li>Access reports and insights to grow your business</li>
              </ol>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="How Grub Works for Restaurants"
                width={600}
                height={400}
                className="rounded-lg mb-8"
              />
            </motion.section>

            <motion.section id="success-stories" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                Success Stories
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-[#FD8000] dark:text-[#FFA500]">
                    Tasty Bites Cafe
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    "Since partnering with Grub, we've seen a 40% increase in
                    our weekday lunch orders. It's been a game-changer for our
                    business!"
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-[#FD8000] dark:text-[#FFA500]">
                    Green Leaf Eatery
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    "Grub has helped us reach a whole new customer base. We're
                    now the go-to healthy option for several local companies."
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section id="join-grub" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                Join Grub
              </h2>
              <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
                Ready to grow your restaurant business with Grub? Join our
                network of successful restaurant partners today!
              </p>
              <div className="flex justify-center space-x-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-[#FD8000] to-[#FFA500] hover:from-[#FD8000]/90 hover:to-[#FFA500]/90 text-white text-lg px-8 py-3"
                >
                  <Link href="/restaurant-signup">Become a Partner</Link>
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
