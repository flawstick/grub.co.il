"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

const FAQAccordion = () => {
  const t = useTranslations("FAQAccordion");

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>{t("questions.howDoesGrubWork")}</AccordionTrigger>
        <AccordionContent>{t("answers.howDoesGrubWork")}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          {t("questions.benefitsForEmployers")}
        </AccordionTrigger>
        <AccordionContent>{t("answers.benefitsForEmployers")}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>{t("questions.partnerWithGrub")}</AccordionTrigger>
        <AccordionContent>{t("answers.partnerWithGrub")}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>{t("questions.availableInMyArea")}</AccordionTrigger>
        <AccordionContent>{t("answers.availableInMyArea")}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
          {t("questions.dietaryRestrictions")}
        </AccordionTrigger>
        <AccordionContent>{t("answers.dietaryRestrictions")}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>
          {t("questions.accommodateBusinesses")}
        </AccordionTrigger>
        <AccordionContent>
          {t("answers.accommodateBusinesses")}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>{t("questions.paymentSecurity")}</AccordionTrigger>
        <AccordionContent>{t("answers.paymentSecurity")}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQAccordion;
