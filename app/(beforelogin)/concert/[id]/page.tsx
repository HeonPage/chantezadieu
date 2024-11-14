import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Yeon_Sung, Libre_Baskerville } from "next/font/google";
import { getConcert } from "../_lib/getConcert";
import ConcertPoster from "../_component/ConcertPoster";
const font_en = Libre_Baskerville({ subsets: ["latin"], weight: ["400"] });
const font_kr = Yeon_Sung({ subsets: ["latin"], weight: ["400"] });

type Props = {
  params: { id: string };
};

// export default async function Page() {
  export default async function Page({ params }: Props) {
  const { id } = params;
  console.log("id", id);
  const concert = await getConcert(id);
  console.log("concert", concert);

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
      </div>
      <div
        className={cn(
          "columns-2 gap-4 tablet-size:columns-3 desktop-size:columns-4 "
        )}
      >
        <ConcertPoster concert={concert} />
      </div>
      <div className="max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden my-8">
        <div className="md:flex">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {concert.title}
            </h2>
            <p className="text-gray-600 mb-4">
              <span className="inline-block mr-4">
                <i className="fas fa-calendar-alt text-blue-500 mr-2"></i>
                {concert.date}
              </span>
              <span className="inline-block">
                <i className="fas fa-map-marker-alt text-blue-500 mr-2"></i>
                {concert.place}
              </span>
            </p>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">
                출연진
              </h3>
              <p>
                <span className="font-medium">지휘:</span>{" "}
                {concert.performers?.conductor}
              </p>
              <div className="mt-2">
                <h4 className="text-md font-semibold text-blue-500 mb-1">
                  솔리스트
                </h4>
                {/* 솔리스트 정보를 동적으로 생성 */}
                {concert.performers && concert.performers.soloists &&
                  Object.entries(concert?.performers?.soloists).map(
                    ([role, names]) => (
                      <p>
                        <span className="font-medium">{role}:</span>{" "}
                        {Array.isArray(names) ? names.join(", ") : names}
                      </p>
                    )
                  )}
              </div>
              <p className="mt-2">
                <span className="font-medium">합창:</span>{" "}
                {concert.performers?.choir}
              </p>
              <p>
                <span className="font-medium">오케스트라:</span>{" "}
                {concert.performers?.orchestra}
              </p>
            </div>
            <div className="mb-6">
              <p>
                <span className="font-medium">주최:</span> {concert.organizer}
              </p>
              {/* <p><span className="font-medium">후원:</span> {concert.sponsor.join(', ')}</p> */}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-2">
                예매처
              </h3>
              <div className="space-x-2">
                {concert.ticketing &&
                  concert.ticketing.map((ticket) => (
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                      {ticket}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
