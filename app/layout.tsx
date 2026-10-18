import { ThemeProvider } from "next-themes";
import "./globals.css";
import "@/styles/tailwind.css";
import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next";
import { webSiteMetadata } from "@/utils/metadata";

// next/font/google은 빌드 시 Google Fonts를 받아오는데, Vercel 빌드 환경에서
// 확장자 없는 폰트 URL이 내려와 빌드가 실패해 런타임 <link>로 불러옴
const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Noto+Sans+KR:wght@300;400;500;700&family=Noto+Serif+KR:wght@400;500;600&display=swap";

export const metadata: Metadata = webSiteMetadata("");

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href={GOOGLE_FONTS_URL} />
      </head>
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
