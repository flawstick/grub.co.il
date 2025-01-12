import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function PrivacyPolicy() {
  const t = await getTranslations("PrivacyPolicy");

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#FD8000] dark:text-[#FFA500]">
        {t("title")}
      </h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>{t("lastUpdated", { date: new Date().toLocaleDateString() })}</p>
        <p>{t("intro")}</p>

        <h2>{t("informationWeCollect.title")}</h2>
        <p>{t("informationWeCollect.description")}</p>
        <ul>
          {Object.keys(t("informationWeCollect.items")).map((key) => (
            <li key={key}>{t(`informationWeCollect.items.${key}`)}</li>
          ))}
        </ul>

        <h2>{t("howWeUseYourInformation.title")}</h2>
        <p>{t("howWeUseYourInformation.description")}</p>
        <ul>
          {Object.keys(t("howWeUseYourInformation.items")).map((key) => (
            <li key={key}>{t(`howWeUseYourInformation.items.${key}`)}</li>
          ))}
        </ul>

        <h2>{t("sharingOfInformation.title")}</h2>
        <p>{t("sharingOfInformation.description")}</p>
        <ul>
          {Object.keys(t("sharingOfInformation.items")).map((key) => (
            <li key={key}>{t(`sharingOfInformation.items.${key}`)}</li>
          ))}
        </ul>

        <h2>{t("yourChoices.title")}</h2>
        <p>{t("yourChoices.description")}</p>

        <h2>{t("changesToThisPolicy.title")}</h2>
        <p>{t("changesToThisPolicy.description")}</p>

        <h2>{t("contactUs.title")}</h2>
        <p>{t("contactUs.description")}</p>
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
