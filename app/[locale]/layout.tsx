import { Fredoka } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { isRTL } from "@/lib/utils";

// 1. Generate static params for all locales
//    This ensures Next.js knows about the localized routes at build time.
export function generateStaticParams() {
  // Each object in this array will correspond to a route segment like /[locale]
  return routing.locales.map((locale) => ({ locale }));
}

// 2. Generate localized metadata for each locale
export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  // Validate that the locale is recognized
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Retrieve translations for this locale
  // 'meta' is the namespace you used in your example
  const t = await getTranslations("meta");

  // The base domain of your site
  const baseUrl = "https://grub.co.il";

  // Construct a canonical URL
  const isDefaultLocale = locale === routing.defaultLocale;
  const localePath = isDefaultLocale ? "/he" : `/${locale}`;
  const canonicalUrl = `${baseUrl}${localePath}`;

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords") ?? "",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        he: `${baseUrl}/he`,
        en: `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: canonicalUrl,
      siteName: "Grub",
      locale,
      images: t("ogImage")
        ? [
            {
              url: `${baseUrl}${t("ogImage")}`,
              width: 1200,
              height: 630,
              alt: t("title"),
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: t("ogImage") ? [`${baseUrl}${t("ogImage")}`] : [],
    },
  };
}

// 3. Font definition
const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-fredoka",
});

// 4. The layout component
export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate the locale again (for safety)
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Tell next-intl to use this locale for the current request
  setRequestLocale(locale);

  // Get the messages needed for this locale
  const messages = await getMessages();
  const direction = isRTL(locale) ? "rtl" : "ltr";

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={fredoka.variable} dir={direction}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ThemeProvider attribute="class" defaultTheme="light">
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-grow pt-16">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </ThemeProvider>
        </NextIntlClientProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
