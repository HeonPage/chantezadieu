import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Yeon_Sung, Libre_Baskerville } from "next/font/google";

const font_en = Libre_Baskerville({ subsets: ["latin"], weight: ["400"] });
const font_kr = Yeon_Sung({ subsets: ["latin"], weight: ["400"] });

// type Props = {
//   params: { id: string };
// };

export default async function Page() {
  // export default async function Page({ params }: Props) {
  // const { id } = params;
  return (
    <>
      <div className="h-[200px] relative flex flex-col items-center justify-center overflow-hidden cursor-pointer text-center mb-5">
        <div className="content-center absolute inset-0 bg-black text-white opacity-80 rounded-lg">
          <div className="flex flex-col gap-2">
            <p className={cn("text-2xl tracking-wide", font_en.className)}>
              Chantez à Dieu 합창단
            </p>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center rounded-lg">
          <Image
            width={768}
            height={768}
            className="h-[200px] object-cover rounded-lg -z-10"
            alt="gallery Logo alt"
            src={"/bg/bg02.jpg"}
          />
        </div>
      </div>
    </>
  );
}
