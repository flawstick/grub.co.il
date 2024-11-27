import './globals.css'
import { Fredoka } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Toaster } from "@/components/ui/toaster"

const fredoka = Fredoka({ subsets: ['latin'] })

export const metadata = {
  title: 'Grub - Streamline Meal Management for Your Team',
  description: 'Effortless meal ordering, salary deductions, and restaurant partnerships—powered by Grub.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fredoka.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow pt-16">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

