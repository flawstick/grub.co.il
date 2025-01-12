"use client";

import Link from "next/link";
import { GrubIcon } from "./icons";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="flex items-center gap-x-2">
            <GrubIcon size={48} />
            <span className="text-2xl font-bold text-[#FD8000]">
              {t("brandName")}
            </span>
          </div>
          <nav className="flex flex-wrap justify-center items-center gap-6 text-base">
            <Link
              href="/about"
              className="text-muted-foreground hover:text-foreground relative group"
            >
              {t("links.about")}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#FD8000] transform scale-x-0 transition-transform duration-300 ltr:origin-left rtl:origin-right group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/features"
              className="text-muted-foreground hover:text-foreground relative group"
            >
              {t("links.features")}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#FD8000] transform scale-x-0 transition-transform duration-300 ltr:origin-left rtl:origin-right group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/testimonials"
              className="text-muted-foreground hover:text-foreground relative group"
            >
              {t("links.testimonials")}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#FD8000] transform scale-x-0 transition-transform duration-300 ltr:origin-left rtl:origin-right group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/book-demo"
              className="text-muted-foreground hover:text-foreground relative group"
            >
              {t("links.bookDemo")}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#FD8000] transform scale-x-0 transition-transform duration-300 ltr:origin-left rtl:origin-right group-hover:scale-x-100"></span>
            </Link>
          </nav>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground relative group"
            >
              {t("links.privacyPolicy")}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#FD8000] transform scale-x-0 transition-transform duration-300 ltr:origin-left rtl:origin-right group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground relative group"
            >
              {t("links.termsOfService")}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#FD8000] transform scale-x-0 transition-transform duration-300 ltr:origin-left rtl:origin-right group-hover:scale-x-100"></span>
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {t("brandName")}{" "}
          {t("rightsReserved")}
        </div>
      </div>
    </footer>
  );
}
