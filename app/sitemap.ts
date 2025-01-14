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
  return routing.locales.flatMap((locale) =>
    routes.map((href) => getEntry(href, locale)),
  );
}

type Href = Parameters<typeof getPathname>[0]["href"];

function getEntry(href: Href, locale: Locale) {
  const url = getUrl(href, locale);
  return {
    url, // URL for the specific locale
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((alternateLocale) => [
          alternateLocale,
          getUrl(href, alternateLocale),
        ]),
      ),
    },
  };
}

function getUrl(href: Href, locale: Locale) {
  const pathname = getPathname({ locale, href });
  return `https://www.grub.co.il${pathname}`;
}
