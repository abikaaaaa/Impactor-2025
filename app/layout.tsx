import type React from "react"
import type { Metadata } from "next"
import { Orbitron } from "next/font/google"
import { Roboto_Condensed } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StarsBackground } from "@/components/stars-background"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Suspense } from "react"

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
})

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-roboto-condensed",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Impactor-2025: Defend the Earth",
  description: "NASA-style asteroid defense simulation and educational platform",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${orbitron.variable} ${robotoCondensed.variable} font-sans antialiased`}>
        <StarsBackground />
        <Suspense fallback={null}>
          <Navigation />
          <main className="relative z-10">{children}</main>
          <Footer />
          <ScrollToTop />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
