"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "HR Manager, TechCorp",
    content:
      "Grub has revolutionized our meal management process. Our employees love the variety of options, and our accounting team appreciates the seamless integration.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Michael Chen",
    role: "CEO, InnovateCo",
    content:
      "Since partnering with Grub, we've seen a significant increase in employee satisfaction. The platform is user-friendly and efficient.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Director, StartupX",
    content:
      "Grub has made lunchtime a breeze for our team. The ordering process is smooth, and the integration with our payroll system is flawless.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "David Kim",
    role: "Restaurant Owner, Tasty Bites",
    content:
      "As a restaurant partner, Grub has opened up a whole new customer base for us. Their platform is easy to use and has significantly boosted our business.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Lisa Patel",
    role: "CFO, MegaCorp",
    content:
      "The integrated payroll deductions feature has streamlined our accounting processes. Grub has saved us countless hours of administrative work.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Tom Wilson",
    role: "Team Lead, DevPro",
    content:
      "Our team loves the customizable menus and scheduled orders. It's made our meal planning effortless and keeps everyone happy.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#FFA500]/5 to-[#FD8000]/5 dark:from-[#FFA500]/10 dark:to-[#FD8000]/10">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#FD8000] dark:text-[#FFA500]">
          What Our Clients Say
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">
                      {testimonial.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
