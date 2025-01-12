import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function NotFound() {
  const t = await getTranslations("NotFound");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="text-center space-y-5">
        <h1 className="text-8xl font-bold text-primary">{t("title")}</h1>
        <p className="text-xl text-muted-foreground">{t("description")}</p>
        <Button asChild className="group hover:scale-105">
          <Link href="/" className="inline-flex items-center space-x-2">
            <span>{t("buttonText")}</span>
            <ArrowRight className="w-4 h-4 transition-all duration-300 ease-in-out group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
