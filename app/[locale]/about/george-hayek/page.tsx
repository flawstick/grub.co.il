"use client";

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
    id: "background",
    title: "Background",
  },
  {
    id: "vision",
    title: "Vision for Grub",
  },
  {
    id: "expertise",
    title: "Areas of Expertise",
  },
  {
    id: "thoughts",
    title: "George's Thoughts",
  },
  {
    id: "contact",
    title: "Contact George",
  },
];

export default function GeorgeHayekPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-[#FD8000] dark:text-[#FFA500]">
                George Daniel Hayek
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-gray-600 dark:text-gray-300">
                CO-Founder
              </h2>
              <div className="flex justify-center mb-12">
                <div className="relative w-64 h-64 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="George Daniel Hayek"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <p className="text-xl mb-8 text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                George Daniel Hayek brings a unique blend of restaurant
                management expertise and tech entrepreneurship to Grub. As a
                CO-Founder, George plays a crucial role in shaping Grub's
                strategy and operations.
              </p>
            </motion.section>

            <motion.section id="background" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                Background
              </h2>
              <ul className="list-disc list-inside space-y-4 mb-8 text-gray-600 dark:text-gray-300">
                <li>10+ years of experience in restaurant management</li>
                <li>Successful tech startup founder in the food industry</li>
                <li>MBA from Harvard Business School</li>
                <li>
                  Bachelor's in Hospitality Management from Cornell University
                </li>
              </ul>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="George's Professional Journey"
                width={600}
                height={400}
                className="rounded-lg mb-8"
              />
            </motion.section>

            <motion.section id="vision" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                Vision for Grub
              </h2>
              <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
                George's vision for Grub is to create a platform that not only
                revolutionizes corporate dining but also empowers local
                restaurants to thrive in the digital age. He sees Grub as a
                bridge between the corporate world and the local food scene,
                fostering community and supporting small businesses.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-[#FD8000] dark:text-[#FFA500]">
                    Empowering Restaurants
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    George is committed to providing restaurants with the tools
                    and platform they need to expand their customer base and
                    streamline operations.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-[#FD8000] dark:text-[#FFA500]">
                    Enhancing Corporate Culture
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Through Grub, George aims to transform corporate dining into
                    a tool for building stronger, more connected workplace
                    communities.
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section id="expertise" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                Areas of Expertise
              </h2>
              <ul className="list-disc list-inside space-y-4 mb-8 text-gray-600 dark:text-gray-300">
                <li>Restaurant operations and management</li>
                <li>Food tech innovation</li>
                <li>Supply chain optimization</li>
                <li>Customer experience design</li>
                <li>Strategic partnerships in the food industry</li>
              </ul>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="George's Areas of Expertise"
                width={600}
                height={400}
                className="rounded-lg mb-8"
              />
            </motion.section>

            <motion.section id="thoughts" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                George's Thoughts
              </h2>
              <blockquote className="text-xl italic text-center max-w-2xl mx-auto mb-8 text-gray-600 dark:text-gray-300">
                "Grub is more than just a meal management platform. It's a way
                to bring people together, support local businesses, and create
                meaningful connections through food."
              </blockquote>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-[#FD8000] dark:text-[#FFA500]">
                    On Innovation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    "The future of dining lies at the intersection of technology
                    and hospitality. At Grub, we're constantly innovating to
                    enhance both."
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-[#FD8000] dark:text-[#FFA500]">
                    On Community
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    "By connecting corporations with local restaurants, we're
                    not just facilitating transactions; we're building stronger,
                    more vibrant communities."
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section id="contact" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                Contact George
              </h2>
              <p className="text-xl mb-8 text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                Interested in learning more about Grub's restaurant partnerships
                or discussing the future of food tech? Get in touch with George
                directly.
              </p>
              <div className="flex justify-center">
                <Button
                  asChild
                  className="bg-gradient-to-r from-[#FD8000] to-[#FFA500] hover:from-[#FD8000]/90 hover:to-[#FFA500]/90 text-white text-lg px-8 py-3"
                >
                  <Link href="/contact">Contact George</Link>
                </Button>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
