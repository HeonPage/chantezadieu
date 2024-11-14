import React from "react";
import Image from "next/image";
import { ICloudinaryImage } from "@/types/ICloudinaryImage";
import { cn } from "@/lib/utils";
import { Yeon_Sung, Libre_Baskerville } from "next/font/google";
import { getGalleryEtc } from "../_lib/GalleryAPI";
import { GalleryMuseum } from "../_component/GalleryMuseum";

const font_en = Libre_Baskerville({ subsets: ["latin"], weight: ["400"] });
const font_kr = Yeon_Sung({ subsets: ["latin"], weight: ["400"] });

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const { slug } = params;
  const images: ICloudinaryImage[] = await getGalleryEtc(slug);
  return (
    <>
      <div className="h-[200px] relative flex flex-col items-center justify-center overflow-hidden cursor-pointer text-center mb-5">
        <div className="content-center absolute inset-0 bg-black text-white opacity-80 rounded-lg">
          <div className="flex flex-col gap-2">
            <p className={cn("text-2xl tracking-wide", font_en.className)}>
              Chantez a dieu Gallery
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
      {images ? (
        <div
          className={cn(
            "columns-2 gap-4 tablet-size:columns-3 desktop-size:columns-4",
            font_kr.className
          )}
        >
          <GalleryMuseum images={images} slug={slug} />
        </div>
      ) : (
        <div className={cn("text-center text-2xl", font_kr.className)}>
          접속량이 많습니다. 잠시 후 다시 시도해주십시오.
        </div>
      )}
    </>
  );
}
