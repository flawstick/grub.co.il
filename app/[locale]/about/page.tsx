"use client";

import { motion } from "framer-motion";
import { Users, Utensils, CreditCard } from "lucide-react";
import FAQAccordion from "@/components/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const founders = [
    {
      name: t("founders.amir.name"),
      role: t("founders.amir.role"),
      bio: t("founders.amir.bio"),
      image: "/placeholder.svg",
      href: "/about/amir-isaac",
    },
    {
      name: t("founders.george.name"),
      role: t("founders.george.role"),
      bio: t("founders.george.bio"),
      image: "/placeholder.svg",
      href: "/about/george-hayek",
    },
  ];

  const beneficiaries = [
    {
      icon: Users,
      title: t("beneficiaries.employers.title"),
      description: t("beneficiaries.employers.description"),
      href: "/about/for-employers",
    },
    {
      icon: Utensils,
      title: t("beneficiaries.employees.title"),
      description: t("beneficiaries.employees.description"),
      href: "/about/for-employees",
    },
    {
      icon: CreditCard,
      title: t("beneficiaries.restaurants.title"),
      description: t("beneficiaries.restaurants.description"),
      href: "/about/for-restaurants",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        className="text-5xl font-bold mb-8 text-center text-[#FD8000] dark:text-[#FFA500]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("title")}
      </motion.h1>

      <motion.div
        className="grid md:grid-cols-2 gap-12 items-center mb-16"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <div>
          <h2 className="text-3xl font-semibold mb-4">{t("mission.title")}</h2>
          <p className="text-xl mb-6 text-gray-700 dark:text-gray-300">
            {t("mission.description1")}
          </p>
          <p className="text-xl mb-6 text-gray-700 dark:text-gray-300">
            {t("mission.description2")}
          </p>
        </div>
        <motion.div
          className="bg-gradient-to-br from-[#FD8000] to-[#FFA500] p-1 rounded-xl shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/img3.png"
            alt={t("images.mission")}
            width={600}
            height={400}
            className="rounded-lg w-full h-auto"
          />
        </motion.div>
      </motion.div>

      {/* Beneficiaries */}
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

      {/* About the Owners */}
      <motion.div
        className="mb-16"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-[#FD8000] dark:text-[#FFA500]">
          {t("founders.title")}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <Link href={founder.href} key={index} className="max-w-md mx-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
                  <CardHeader className="pb-0 bg-gradient-to-br from-[#fd8000] to-[#ffa000]">
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
                  <CardContent>
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
      <FAQAccordion />
    </div>
  );
}
