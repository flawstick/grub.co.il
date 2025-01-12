"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTranslations } from "next-intl";

const testimonials = [
  {
    nameKey: "sarahJohnsonName",
    roleKey: "sarahJohnsonRole",
    contentKey: "sarahJohnsonContent",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    nameKey: "michaelChenName",
    roleKey: "michaelChenRole",
    contentKey: "michaelChenContent",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    nameKey: "emilyRodriguezName",
    roleKey: "emilyRodriguezRole",
    contentKey: "emilyRodriguezContent",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    nameKey: "davidKimName",
    roleKey: "davidKimRole",
    contentKey: "davidKimContent",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    nameKey: "lisaPatelName",
    roleKey: "lisaPatelRole",
    contentKey: "lisaPatelContent",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    nameKey: "tomWilsonName",
    roleKey: "tomWilsonRole",
    contentKey: "tomWilsonContent",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

export const TestimonialsSection = () => {
  const t = useTranslations("Testimonials");

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#FFA500]/5 to-[#FD8000]/5 dark:from-[#FFA500]/10 dark:to-[#FD8000]/10">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#FD8000] dark:text-[#FFA500]">
          {t("title")}
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
                      alt={t(testimonial.nameKey)}
                    />
                    <AvatarFallback>
                      {t(testimonial.nameKey)
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">
                      {t(testimonial.nameKey)}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {t(testimonial.roleKey)}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    &ldquo;{t(testimonial.contentKey)}&rdquo;
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
