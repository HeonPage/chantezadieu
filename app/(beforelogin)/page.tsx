import dynamic from "next/dynamic";
import { Separator } from "@/components/ui/separator";
import { Libre_Baskerville } from "next/font/google";
import Image from "next/image";
import ConcertBox from "./_component/ConcertBox";
const IntroduceBox = dynamic(() => import("./_component/IntroduceBox"));

const font = Libre_Baskerville({ subsets: ["latin"], weight: ["400"] });

const mainPage_photo = "/home-bg.jpg";

export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-8">
        {/* 메인이미지 */}
        <div className={font.className}>
          <div className="relative">
            <Image
              className="h-screen w-full object-cover"
              src={mainPage_photo}
              alt="main image"
              width={2930}
              height={1430}
              sizes="(max-width: 768px) 1300px, 1800px"
              priority
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute inset-0 flex flex-col gap-6 items-center justify-center">
              <h1 className="flex flex-col text-center text-white mobile-size:text-4xl tablet-size:text-5xl desktop-size:text-7xl tracking-wide gap-2">
                <span>Chœur Chantez à Dieu12312321321</span>
              </h1>
            </div>
          </div>
        </div>

        <div
          id="landing"
          className="container w-full max-w-[1000px] flex flex-col self-center gap-8"
        >
          {/* INTRODUCE */}
          <IntroduceBox />
          <Separator />
          {/* INTRODUCE */}
          <ConcertBox />
          <Separator />
          {/* NEWS */}
          <div className="grid grid-cols-1 desktop-size:grid-cols-2"></div>
          <Separator />
          {/* Sponsors */}
          {/* <Sponsors /> */}
        </div>
      </div>
    </>
  );
}
