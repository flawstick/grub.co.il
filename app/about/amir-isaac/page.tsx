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
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "thoughts",
    title: "Amir's Thoughts",
  },
  {
    id: "contact",
    title: "Contact Amir",
  },
];

export default function AmirIsaacPage() {
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
                Amir Isaac
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-gray-600 dark:text-gray-300">
                CO-Founder and CEO
              </h2>
              <div className="flex justify-center mb-12">
                <div className="relative w-64 h-64 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Amir Isaac"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <p className="text-xl mb-8 text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                Amir Isaac brings over 15 years of experience in the tech
                industry, with a passion for revolutionizing corporate dining
                experiences. As the CO-Founder and CEO of Grub, Amir leads the
                company's vision and strategy.
              </p>
            </motion.section>

            <motion.section id="background" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                Background
              </h2>
              <ul className="list-disc list-inside space-y-4 mb-8 text-gray-600 dark:text-gray-300">
                <li>Former Product Manager at leading tech companies</li>
                <li>MBA from Stanford Graduate School of Business</li>
                <li>Bachelor's in Computer Science from MIT</li>
                <li>Serial entrepreneur with two successful exits</li>
              </ul>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Amir's Professional Journey"
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
                Amir's vision for Grub is to create a seamless ecosystem that
                connects companies, employees, and local restaurants. He
                believes in leveraging technology to solve the complexities of
                corporate dining, ultimately enhancing workplace satisfaction
                and supporting local businesses.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-[#FD8000] dark:text-[#FFA500]">
                    Innovating Corporate Dining
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Amir aims to transform how companies approach employee
                    meals, making it a seamless and enjoyable experience for
                    all.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-[#FD8000] dark:text-[#FFA500]">
                    Supporting Local Restaurants
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Through Grub, Amir envisions creating a platform that helps
                    local restaurants thrive by connecting them with corporate
                    clients.
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section id="achievements" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                Achievements
              </h2>
              <ul className="list-disc list-inside space-y-4 mb-8 text-gray-600 dark:text-gray-300">
                <li>Led Grub to secure $10 million in Series A funding</li>
                <li>
                  Expanded Grub's operations to 10 major cities across the
                  United States
                </li>
                <li>Formed partnerships with over 500 local restaurants</li>
                <li>
                  Recognized as "Innovator of the Year" by TechCrunch in 2023
                </li>
              </ul>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Amir's Achievements"
                width={600}
                height={400}
                className="rounded-lg mb-8"
              />
            </motion.section>

            <motion.section id="thoughts" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                Amir's Thoughts
              </h2>
              <blockquote className="text-xl italic text-center max-w-2xl mx-auto mb-8 text-gray-600 dark:text-gray-300">
                "At Grub, we're not just building a meal management platform.
                We're creating a solution that brings people together, supports
                local businesses, and makes the workplace a little bit better
                every day."
              </blockquote>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-[#FD8000] dark:text-[#FFA500]">
                    On Technology
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    "Technology should simplify our lives and bring us closer
                    together. That's what we strive for with every feature we
                    develop at Grub."
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-[#FD8000] dark:text-[#FFA500]">
                    On Leadership
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    "Great leaders don't create followers; they create more
                    leaders. At Grub, we're building a team of innovators and
                    problem-solvers."
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section id="contact" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                Contact Amir
              </h2>
              <p className="text-xl mb-8 text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                Interested in learning more about Grub or discussing potential
                partnerships? Get in touch with Amir directly.
              </p>
              <div className="flex justify-center">
                <Button
                  asChild
                  className="bg-gradient-to-r from-[#FD8000] to-[#FFA500] hover:from-[#FD8000]/90 hover:to-[#FFA500]/90 text-white text-lg px-8 py-3"
                >
                  <Link href="/contact">Contact Amir</Link>
                </Button>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
