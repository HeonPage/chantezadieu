"use client";
import React from "react";
import { Libre_Baskerville } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "../../components/ui/button";
import { Instagram, Youtube } from "lucide-react";

import Link from "next/link";
const font = Libre_Baskerville({ subsets: ["latin"], weight: ["400"] });
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full flex mobile-size:flex-col items-center justify-center border-t mx-auto text-center text-xs gap-8 py-8">
      <div className="flex flex-col gap-1">
        <div className="text-2xl font-bold">샹떼 자 듀 합창단</div>
        <div className={cn("text-2xl tracking-tight", font.className)}>
          Chantez à Dieu
        </div>
        <div className="text-md">
          <Link href="/">www.chantezadieu.com</Link>
        </div>
      </div>
      <div className="flex flex-col gap-1 desktop-size:items-start mobile-size:items-center">
        <div className="flex items-center gap-4">
          <a
            href="https://www.youtube.com/@choeurchantezadieu6139"
            target="_blank"
          >
            <Button variant="ghost" size="icon">
              <Youtube className="w-5 h-5" />
            </Button>
          </a>
          <a href="https://www.instagram.com/chantez_a_dieu/" target="_blank">
            <Button variant="ghost" size="icon">
              <Instagram className="w-5 h-5" />
            </Button>
          </a>
        </div>
        <div>© {currentYear} 대표자명 : 김혜옥(Kim Hae-Ock)</div>
        <div>
          주소 : 서울특별시 용산구 독서당로 86, 402호(402, Dokseodang-ro 86,
          Yongsan-gu, Seoul, Republic of Korea)
        </div>
        <div>TEL : (+82)10 6254 0502</div>
      </div>
    </footer>
  );
};

export default Footer;
