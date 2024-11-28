"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function BookDemo() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Book a Demo with Grub</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <motion.img
            src="/placeholder.svg?height=400&width=400"
            alt="Grub Demo"
            className="rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="mt-6 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-2">Why Book a Demo?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>See Grub in action</li>
              <li>Learn how to streamline your meal management</li>
              <li>Discover integration possibilities</li>
              <li>Get answers to your specific questions</li>
            </ul>
          </motion.div>
        </div>
        <div>
          {!isSubmitted ? (
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
              <div>
                <Label htmlFor="company">Company</Label>
                <Input id="company" required />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#FD8000] hover:bg-[#FD8000]/90 dark:bg-[#FFA500] dark:hover:bg-[#FFA500]/90"
              >
                Submit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.form>
          ) : (
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Thank You!</h2>
              <p>
                We've received your demo request and will be in touch shortly.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
