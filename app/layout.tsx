import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import Navbar from "@/components/navbar"
import ScrollToTop from "@/components/scroll-to-top"

export const metadata: Metadata = {
  title: "SLIIT Software Engineering Student Community",
  description: "Official website of the SLIIT Software Engineering Student Community",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
          :root {
            --background: 0 0% 100%;
            --foreground: 222.2 84% 4.9%;
            --card: 0 0% 100%;
            --card-foreground: 222.2 84% 4.9%;
            --popover: 0 0% 100%;
            --popover-foreground: 222.2 84% 4.9%;
            --primary: 231 48% 28%;
            --primary-foreground: 210 40% 98%;
            --secondary: 24 100% 50%;
            --secondary-foreground: 222.2 47.4% 11.2%;
            --muted: 210 40% 96.1%;
            --muted-foreground: 215.4 16.3% 46.9%;
            --accent: 210 40% 96.1%;
            --accent-foreground: 222.2 47.4% 11.2%;
            --destructive: 0 84.2% 60.2%;
            --destructive-foreground: 210 40% 98%;
            --border: 214.3 31.8% 91.4%;
            --input: 214.3 31.8% 91.4%;
            --ring: 231 48% 28%;
            --radius: 0.5rem;
          }
        `,
          }}
        />
      </head>
      <body className="font-sans" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} forcedTheme="light">
          <Navbar />
          <main>{children}</main>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
