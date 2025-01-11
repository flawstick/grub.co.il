import { Fredoka } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages, getTranslations } from "next-intl/server";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-fredoka",
});

// 1. Generate localized metadata
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
  // (Assuming 'common' is where your metadata strings live)
  const t = await getTranslations("meta");

  // The base domain of your site
  const baseUrl = "https://grub.co.il";

  // Construct a canonical URL for each locale
  // If your default locale is Hebrew ("he"), no prefix for Hebrew, "/en" for English, etc.
  const isDefaultLocale = locale === routing.defaultLocale;
  const localePath = isDefaultLocale ? "/he" : `/${locale}`;
  const canonicalUrl = `${baseUrl}${localePath}`;

  // Return metadata fields recognized by Next.js 13
  return {
    title: t("title"),
    description: t("description"),

    // Standard SEO fields
    keywords: t("keywords") ?? "",
    robots: {
      index: true,
      follow: true,
    },

    // Alternates for multi-language sites (important for SEO)
    // This helps search engines understand there's a Hebrew and English version
    alternates: {
      canonical: canonicalUrl,
      languages: {
        he: `${baseUrl}/he`,
        en: `${baseUrl}/en`,
      },
    },

    // Open Graph metadata
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

    // Twitter Card metadata
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: t("ogImage") ? [`${baseUrl}${t("ogImage")}`] : [],
    },
  };
}

// 2. The layout component itself
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

  // Provide messages to the client side
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={fredoka.variable}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
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
