import { ThemeProvider } from "next-themes";
import "./globals.css";
import "@/styles/tailwind.css";
import { Noto_Sans_KR } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next";
import { webSiteMetadata } from "@/utils/metadata";
const font = Noto_Sans_KR({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = webSiteMetadata("");

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={font.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {/* Shadcn-UI Toaster */}
        <Toaster />
      </body>
    </html>
  );
}
