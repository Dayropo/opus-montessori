import type { Metadata } from "next"
import "@/styles/globals.css"
import { bubblegumSans, montserrat } from "@/styles/fonts"
import Header from "@/components/Header"

export const metadata: Metadata = {
  title: {
    default: "Opus Montessori School",
    template: "%s - Opus Montessori School",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${bubblegumSans.variable} ${montserrat.variable} antialiased`}>
        <div className="font-montserrat relative min-h-[100dvh] w-full">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
