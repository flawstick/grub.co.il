"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { sendContactMessage } from "@/lib/api";

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      await sendContactMessage({ name, email, message });
      toast({
        title: t("toast.success.title"),
        description: t("toast.success.description"),
      });
      e.currentTarget.reset();
    } catch (error) {
      toast({
        title: t("toast.error.title"),
        description: t("toast.error.description"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-[#FD8000] dark:text-[#FFA500]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("title")}
      </motion.h1>
      <motion.div
        className="max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name">{t("form.name.label")}</Label>
            <Input
              id="name"
              name="name"
              placeholder={t("form.name.placeholder")}
              required
            />
          </div>
          <div>
            <Label htmlFor="email">{t("form.email.label")}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t("form.email.placeholder")}
              required
            />
          </div>
          <div>
            <Label htmlFor="message">{t("form.message.label")}</Label>
            <Textarea
              id="message"
              name="message"
              placeholder={t("form.message.placeholder")}
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#FD8000] hover:bg-[#FD8000]/90 dark:bg-[#FFA500] dark:hover:bg-[#FFA500]/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? t("form.submit.loading") : t("form.submit.default")}
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
