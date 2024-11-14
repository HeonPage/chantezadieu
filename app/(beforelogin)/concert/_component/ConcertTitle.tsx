"use client";
import React from "react";
import Image from "next/image";
import { blurData_url } from "@/utils/utils";
import { Libre_Baskerville, Yeon_Sung } from "next/font/google";
import { cn } from "@/lib/utils";
import { IConcert } from "@/types/IConcert";
import { useLocale } from "use-intl";
const font_en = Libre_Baskerville({ subsets: ["latin"], weight: ["400"] });
const font_kr = Yeon_Sung({ subsets: ["latin"], weight: ["400"] });

type Props = {
  concert: IConcert;
  params: { age: string; type: string; no: number };
};

const ConcertTitle = ({ concert, params }: Props) => {
  const { age, type, no } = params;
  const locale = useLocale();
  return (
    <div className="h-[200px] relative flex flex-col items-center justify-center overflow-hidden cursor-pointer text-center mb-5">
      <div className="content-center absolute inset-0 bg-black text-white opacity-80 rounded-lg">
        <div className="flex flex-col gap-2">
          <p className={cn("text-lg tracking-wide", font_en.className)}>
            Chantez a dieu
          </p>
          <p
            className={cn(
              "text-4xl mobile-size:text-2xl tracking-wide",
              font_kr.className
            )}
          >
            {locale == "ko" &&
              (type === "ann"
                ? `제${params.no}회 정기연주회`
                : type === "may"
                ? "5월의 노래축제"
                : "기타 공연")}
            {locale == "en" &&
              (type === "ann"
                ? `${params.no}${
                    params.no == 1
                      ? "st"
                      : params.no == 2
                      ? "nd"
                      : params.no == 3
                      ? "rd"
                      : "th"
                  } Annual Concert`
                : type === "may"
                ? `${params.no}${
                    params.no == 1
                      ? "st"
                      : params.no == 2
                      ? "nd"
                      : params.no == 3
                      ? "rd"
                      : "th"
                  } May Concert`
                : "Concer2t")}
          </p>
          <p
            className={cn(
              "text-sm mobile-size:text-xs tracking-wide",
              font_kr.className
            )}
          >
            {concert.date} {concert.place}
          </p>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center rounded-lg">
        <Image
          width={768}
          height={768}
          className="h-[200px] object-cover rounded-lg -z-10"
          alt="gallery Logo alt"
          src={concert.img_url}
          placeholder="blur"
          blurDataURL={
            concert.blurData_url ? concert.blurData_url : blurData_url
          }
        />
      </div>
    </div>
  );
};

export default ConcertTitle;
