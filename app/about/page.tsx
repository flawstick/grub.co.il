"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Utensils, CreditCard } from "lucide-react";
import FAQAccordion from "@/components/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const founders = [
  {
    name: "Amir Isaac",
    role: "CO-Founder and CEO",
    bio: "Amir brings over 15 years of experience in the tech industry, with a passion for revolutionizing corporate dining experiences.",
    image: "/placeholder.svg?height=300&width=300",
    href: "/about/amir-isaac",
  },
  {
    name: "George Hayek",
    role: "CO-Founder",
    bio: "George has a background in restaurant management and tech entrepreneurship, bringing a unique perspective to Grub's mission.",
    image: "/placeholder.svg?height=300&width=300",
    href: "/about/george-hayek",
  },
];

const beneficiaries = [
  {
    icon: Users,
    title: "For Employers",
    description: "Simplify meal management and boost employee satisfaction",
    href: "/about/for-employers",
  },
  {
    icon: Utensils,
    title: "For Employees",
    description: "Enjoy a wide variety of meal options with easy ordering",
    href: "/about/for-employees",
  },
  {
    icon: CreditCard,
    title: "For Restaurants",
    description: "Expand your customer base and streamline orders",
    href: "/about/for-restaurants",
  },
];

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        className="text-5xl font-bold mb-8 text-center text-[#FD8000] dark:text-[#FFA500]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Grub
      </motion.h1>

      <motion.div
        className="grid md:grid-cols-2 gap-12 items-center mb-16"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-xl mb-6 text-gray-700 dark:text-gray-300">
            Grub is a revolutionary platform that enables companies to support
            their employees with easy food ordering, seamless payroll
            integration, and restaurant partnerships.
          </p>
          <p className="text-xl mb-6 text-gray-700 dark:text-gray-300">
            Our mission is to simplify meal management for businesses of all
            sizes, creating a win-win situation for employers, employees, and
            local restaurants.
          </p>
        </div>
        <motion.div
          className="bg-gradient-to-br from-[#FD8000] to-[#FFA500] p-1 rounded-xl shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Grub in action"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="mb-16"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Story</h2>
        <p className="text-xl mb-6 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Founded in 2023, Grub was born out of the need to streamline corporate
          meal programs. We noticed that many companies struggled with managing
          employee meals, from ordering to accounting. That's when we decided to
          create a comprehensive solution that addresses all these pain points.
        </p>
      </motion.div>

      <motion.div
        className="mb-16"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Vision</h2>
        <p className="text-xl mb-6 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          We envision a future where every company can easily provide meal
          benefits to their employees, supporting local restaurants while
          simplifying their internal processes. With Grub, we're making this
          vision a reality, one meal at a time.
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-3 gap-8 mb-16"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        {beneficiaries.map((item, index) => (
          <Link href={item.href} key={index} className="block h-full">
            <Card className="relative overflow-hidden transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl h-full flex flex-col group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-[#FD8000] to-[#FFA500] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>
              <CardContent className="relative z-10 flex-grow p-6">
                <item.icon className="h-12 w-12 text-[#FD8000] dark:text-[#FFA500] mb-4 group-hover:text-white transition-colors duration-300" />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors duration-300">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </motion.div>

      <motion.div
        className="mb-16"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-[#FD8000] dark:text-[#FFA500]">
          About the Owners
        </h2>
        <div className="grid md:grid-cols-2 gap-8 justify-center">
          {founders.map((founder, index) => (
            <Link href={founder.href} key={index} className="max-w-md mx-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden bg-gradient-to-br from-[#FFA500] to-[#FD8000] transition-all duration-300 hover:shadow-xl">
                  <CardHeader className="pb-0">
                    <div className="w-full h-64 overflow-hidden rounded-t-lg">
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="bg-white dark:bg-gray-800">
                    <CardTitle className="text-2xl mb-2 text-[#FD8000] dark:text-[#FFA500]">
                      {founder.name}
                    </CardTitle>
                    <p className="font-semibold mb-2 text-gray-600 dark:text-gray-400">
                      {founder.role}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {founder.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="mb-16"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <FAQAccordion />
      </motion.div>

      <motion.div
        className="text-center"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <div className="relative inline-block">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 200 60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="buttonGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#FD8000" />
                <stop offset="100%" stopColor="#FFA500" />
              </linearGradient>
            </defs>
            <path
              d="M20,0 Q0,0 0,20 L0,40 Q0,60 20,60 L180,60 Q200,60 200,40 L200,20 Q200,0 180,0 Z"
              fill="url(#buttonGradient)"
            />
            <path
              d="M15,5 Q5,5 5,15 L5,45 Q5,55 15,55 L185,55 Q195,55 195,45 L195,15 Q195,5 185,5 Z"
              fill="none"
              stroke="white"
              strokeWidth="2"
              opacity="0.5"
            />
          </svg>
          <Button
            asChild
            className="relative z-10 bg-transparent hover:bg-transparent text-white text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-1"
          >
            <Link
              href="/book-demo"
              className="flex items-center justify-center"
            >
              <span>Join Grub Today</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
