import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { NuqsAdapter } from "nuqs/adapters/next/app"
import { ReactQueryProvider } from "@/lib/react-query"

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    template: "%s | Product Roadmap",
    default: "Product Roadmap",
  },
  description: "Follow the development progress of our entire platform.",
}

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <html lang="en" className={interFont.className}>
      <body className={`bg-navy-950 text-navy-50 antialiased`}>
        <ReactQueryProvider>
          <NuqsAdapter>
            {modal}
            {children}
          </NuqsAdapter>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
