import { clsx } from "clsx";
import { Fredoka } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ReactNode } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-fredoka",
});

type Props = {
  children: ReactNode;
  locale: string;
};

export async function BaseLayout({ children, locale }: Props) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html className="h-full" lang={locale}>
      <body
        className={clsx(fredoka.className, "flex h-full flex-col")}
        dir="ltr"
      >
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
