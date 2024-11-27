"use client";

import { motion } from "framer-motion";
import { CreditCard } from "lucide-react";
import Image from "next/image";
import { SideNavigation } from "@/components/side-navigation";

const navItems = [
  {
    id: "introduction",
    title: "Introduction",
  },
  {
    id: "benefits",
    title: "Benefits",
    subItems: [
      { id: "simplified-accounting", title: "Simplified Accounting" },
      { id: "employee-convenience", title: "Employee Convenience" },
      { id: "tax-benefits", title: "Tax Benefits" },
    ],
  },
  {
    id: "how-it-works",
    title: "How It Works",
  },
  {
    id: "security",
    title: "Security and Compliance",
  },
  {
    id: "get-started",
    title: "Get Started",
  },
];

export default function IntegratedPayrollDeductionsPage() {
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
                Integrated Payroll Deductions
              </h1>
              <div className="flex items-center justify-center mb-8">
                <CreditCard className="h-16 w-16 text-[#FD8000] dark:text-[#FFA500]" />
              </div>
              <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
                Grub's Integrated Payroll Deductions feature seamlessly connects
                your company's payroll system with our meal management platform,
                making it easy to handle meal expenses for both employers and
                employees.
              </p>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Integrated Payroll Deductions Overview"
                width={600}
                height={400}
                className="rounded-lg mb-8"
              />
            </motion.section>

            <motion.section id="benefits" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                Benefits
              </h2>

              <motion.div id="simplified-accounting" {...fadeIn}>
                <h3 className="text-2xl font-semibold mb-4 text-[#FD8000] dark:text-[#FFA500]">
                  Simplified Accounting
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Automate the process of tracking and deducting meal expenses,
                  reducing administrative overhead and minimizing errors.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Simplified Accounting Illustration"
                  width={500}
                  height={300}
                  className="rounded-lg mb-8"
                />
              </motion.div>

              <motion.div id="employee-convenience" {...fadeIn}>
                <h3 className="text-2xl font-semibold mb-4 text-[#FD8000] dark:text-[#FFA500]">
                  Employee Convenience
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Employees can enjoy meals without worrying about immediate
                  out-of-pocket expenses or reimbursement processes.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Employee Convenience Demonstration"
                  width={500}
                  height={300}
                  className="rounded-lg mb-8"
                />
              </motion.div>

              <motion.div id="tax-benefits" {...fadeIn}>
                <h3 className="text-2xl font-semibold mb-4 text-[#FD8000] dark:text-[#FFA500]">
                  Tax Benefits
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Properly structured meal programs with payroll deductions can
                  offer tax advantages for both employers and employees.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Tax Benefits Explanation"
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
                <li>Grub integrates with your existing payroll system</li>
                <li>Employees order meals through the Grub platform</li>
                <li>Meal expenses are automatically tracked and calculated</li>
                <li>
                  Deductions are processed during the regular payroll cycle
                </li>
                <li>
                  Detailed reports are generated for accounting and tax purposes
                </li>
              </ol>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="How Integrated Payroll Deductions Work"
                width={600}
                height={400}
                className="rounded-lg mb-8"
              />
            </motion.section>

            <motion.section id="security" {...fadeIn}>
              <h2 className="text-3xl font-semibold mb-6 text-[#FD8000] dark:text-[#FFA500]">
                Security and Compliance
              </h2>
              <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
                Grub's Integrated Payroll Deductions feature is designed with
                security and compliance in mind. We use industry-standard
                encryption and follow all relevant data protection regulations
                to ensure the safety and privacy of your company's and
                employees' information.
              </p>
              <ul className="list-disc list-inside space-y-4 mb-8 text-gray-600 dark:text-gray-300">
                <li>End-to-end encryption for all data transfers</li>
                <li>Regular security audits and penetration testing</li>
                <li>
                  Compliance with GDPR, CCPA, and other applicable regulations
                </li>
                <li>Secure API integrations with major payroll providers</li>
              </ul>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Security and Compliance Measures"
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
                Ready to streamline your meal program accounting and offer a
                convenient perk to your employees? Contact our team to learn
                more about implementing Grub's Integrated Payroll Deductions for
                your organization.
              </p>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
