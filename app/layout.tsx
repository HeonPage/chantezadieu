import { ThemeProvider } from "next-themes";
import "./globals.css";
import "@/styles/tailwind.css";
import {
  Noto_Sans_KR,
  Noto_Serif_KR,
  Cormorant_Garamond,
} from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next";
import { webSiteMetadata } from "@/utils/metadata";
import { cn } from "@/lib/utils";

const sans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});
const serif = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});
const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = webSiteMetadata("");

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={cn(sans.variable, serif.variable, display.variable)}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
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
