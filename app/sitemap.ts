import { MetadataRoute } from "next";
import { Locale, getPathname, routing } from "@/i18n/routing";

// Define your routes
const routes = [
  "/about",
  "/book-demo",
  "/contact",
  "/download",
  "/features",
  "/privacy",
  "/terms",
  "/testimonials",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(getEntry);
}

type Href = Parameters<typeof getPathname>[0]["href"];

function getEntry(href: Href) {
  return {
    url: getUrl(href, routing.defaultLocale), // Default locale URL (Hebrew)
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, getUrl(href, locale)]),
      ),
    },
  };
}

function getUrl(href: Href, locale: Locale) {
  const pathname = getPathname({ locale, href });
  return `https://grub.co.il${pathname}`;
}
