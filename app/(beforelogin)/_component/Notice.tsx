"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Libre_Baskerville } from "next/font/google";
import Link from "next/link";
const font = Libre_Baskerville({ subsets: ["latin"], weight: ["400"] });
export function NoticeBox() {
  return (
    <div className="w-full">
      <Card className="border-0 shadow-none">
        <CardHeader className="mobile-size:px-0 tablet-size:px-0 pt-0">
          <CardTitle
            className={cn("text-4xl mobile-size:text-center", font.className)}
          >
            News & Events
          </CardTitle>
          {/* <CardDescription>글리클럽의 새로운 소식을 알려드려요</CardDescription> */}
        </CardHeader>
        <CardContent className="mobile-size:px-0 tablet-size:px-0 grid gap-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <Link key={index} href="#">
              <div className="flex items-center justify-between hover:font-semibold">
                <div className="w-[70%] tablet-size:w-[40%] desktop-size:w-[50%] text-ellipsis line-clamp-1">
                  창단 제40주년 기념연주회
                </div>
                <span className="w-[30%] tablet-size:w-[60%] desktop-size:w-[50%] text-ellipsis line-clamp-1 text-sm text-end">
                  2024. 12. 01. (일) 오후 5시 연세대학교 백주년기념관 콘서트홀
                </span>
              </div>
            </Link>
          ))}
          <div className="flex items-center justify-between">
            <div className="w-[70%] tablet-size:w-[40%] desktop-size:w-[50%] text-ellipsis line-clamp-1">
              제24회 5월의 노래축제
            </div>
            <span className="w-[30%] tablet-size:w-[60%] desktop-size:w-[50%] text-ellipsis line-clamp-1 text-sm text-end">
              2025. 6. 01. (일) 오후 5시 연세대학교 금호콘서트홀
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
