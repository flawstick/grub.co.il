"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Utensils,
  CreditCard,
  Building,
  Users,
  Clock,
  ChefHat,
} from "lucide-react";
import { useTranslations } from "next-intl";

export const FeaturesSection = () => {
  const t = useTranslations("FeaturesSection");

  const features = [
    {
      icon: Utensils,
      title: t("easyEmployeeMeals.title"),
      description: t("easyEmployeeMeals.description"),
      href: "/features/easy-employee-meals",
    },
    {
      icon: Building,
      title: t("lowRestaurantFees.title"),
      description: t("lowRestaurantFees.description"),
      href: "/features/low-restaurant-fees",
    },
    {
      icon: CreditCard,
      title: t("integratedPayrollDeductions.title"),
      description: t("integratedPayrollDeductions.description"),
      href: "/features/integrated-payroll-deductions",
    },
    {
      icon: Users,
      title: t("teamManagement.title"),
      description: t("teamManagement.description"),
      href: "/features/team-management",
    },
    {
      icon: Clock,
      title: t("scheduledOrders.title"),
      description: t("scheduledOrders.description"),
      href: "/features/scheduled-orders",
    },
    {
      icon: ChefHat,
      title: t("customizableMenus.title"),
      description: t("customizableMenus.description"),
      href: "/features/customizable-menus",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#FFA500]/10 to-[#FD8000]/10 dark:from-[#FFA500]/5 dark:to-[#FD8000]/5">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#FD8000] dark:text-[#FFA500]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t("title")}
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              className="group h-full"
            >
              <Link href={feature.href} className="block h-full">
                <Card className="relative overflow-hidden transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl h-full flex flex-col group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FD8000] to-[#FFA500] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>
                  <CardHeader className="relative z-10">
                    <feature.icon className="h-8 w-8 mb-2 text-[#FD8000] dark:text-[#FFA500] group-hover:text-white transition-colors duration-300" />
                    <CardTitle className="group-hover:text-white transition-colors duration-300">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10 flex-grow">
                    <p className="text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors duration-300">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
