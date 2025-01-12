import * as React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function TermsOfService() {
  const t = await getTranslations("TermsOfService");

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#FD8000] dark:text-[#FFA500]">
        {t("title")}
      </h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>{t("lastUpdated", { date: new Date().toLocaleDateString() })}</p>
        <p>{t("intro")}</p>

        {/*@ts-ignore*/}
        {[...Array(9).keys()].map((section) => (
          <React.Fragment key={section}>
            <h2>{t(`sections.${section + 1}.title`)}</h2>
            <p>{t(`sections.${section + 1}.content`)}</p>
          </React.Fragment>
        ))}

        <h2>{t("contactUs.title")}</h2>
        <p>{t("contactUs.address")}</p>
        <p>{t("contactUs.email")}</p>
      </div>
      <div className="mt-8 text-center">
        <Button asChild>
          <Link href="/">{t("returnToHome")}</Link>
        </Button>
      </div>
    </div>
  );
}
