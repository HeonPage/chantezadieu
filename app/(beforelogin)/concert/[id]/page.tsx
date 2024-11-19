import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Yeon_Sung, Libre_Baskerville } from "next/font/google";
import { getConcert } from "../_lib/getConcert";
import ConcertPoster from "../_component/ConcertPoster";
import fs from "fs";
import path from "path";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const font_en = Libre_Baskerville({ subsets: ["latin"], weight: ["400"] });
const font_kr = Yeon_Sung({ subsets: ["latin"], weight: ["400"] });

type Props = {
  params: { id: string };
};

export default async function Page({ params }: Props) {
  const { id } = params;
  const concert = await getConcert(id);

  // 이미지 파일 목록을 가져오는 로직 추가
  let images: string[] = [];
  const publicFolderPath = path.join(process.cwd(), "public", id);

  try {
    if (fs.existsSync(publicFolderPath)) {
      const files = fs.readdirSync(publicFolderPath);
      images = files
        .filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file))
        .map((file) => `/${id}/${file}`);
    }
  } catch (error) {
    console.error("이미지 로딩 중 에러:", error);
  }
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
      <div className="max-w-4xl bg-white border border-gray-200 rounded-lg overflow-hidden my-8 text-start">
        <div className="md:flex">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {concert.title}
            </h2>
            {/* 솔리스트 정보를 동적으로 생성 */}
            {concert.performers && (
              <>
                <p className="text-gray-600 mb-4 text-sm">
                  <span className="inline-block mr-4">{concert.date}</span>
                  <span className="inline-block">{concert.place}</span>
                </p>
                <div className="mb-6">
                  <p className="text-gray-600 mb-4">{concert.desc}</p>

                  {/* 프로그램(Part) 섹션 추가 */}
                  {concert.program && (
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold mb-2">프로그램</h3>
                      {Object.entries(concert.program).map(
                        ([partName, pieces], index) => (
                          <div key={index} className="mb-2">
                            <p className="font-medium">{partName}</p>
                            {pieces?.map(
                              (piece: string, pieceIndex: number) => (
                                <p
                                  key={pieceIndex}
                                  className="ml-4 text-gray-700"
                                >
                                  {piece}
                                </p>
                              )
                            )}
                          </div>
                        )
                      )}
                    </div>
                  )}

                  <h3 className="text-lg font-semibold mb-2">출연진</h3>
                  <p>
                    <span className="font-medium">지휘:</span>{" "}
                    {concert.performers?.conductor}
                  </p>
                  {concert.performers?.soloists && (
                    <div className="mt-2">
                      <h4 className="text-md font-semibold mb-1">솔리스트</h4>
                      {Object.entries(concert.performers.soloists).map(
                        ([role, names]) => (
                          <p key={role}>
                            <span className="font-medium">{role}:</span>{" "}
                            {Array.isArray(names) ? names.join(", ") : names}
                          </p>
                        )
                      )}
                    </div>
                  )}
                  <p className="mt-2">
                    <span className="font-medium">합창:</span>{" "}
                    {concert.performers?.choir}
                  </p>
                  <p>
                    <span className="font-medium">오케스트라:</span>{" "}
                    {concert.performers?.orchestra}
                  </p>
                </div>
              </>
            )}
            <div className="mb-6">
              <p>
                <span className="font-medium">주최:</span> {concert.organizer}
              </p>
              {/* <p><span className="font-medium">후원:</span> {concert.sponsor.join(', ')}</p> */}
            </div>
            {/* YouTube 영상 섹션 추가 */}
            {concert.youtube_url && (
              <h3 className="text-lg font-semibold mb-4">공연 영상</h3>
            )}
            {concert.youtube_url &&
              concert.youtube_url.map((url, index) => (
                <div className="mt-8" key={url}>
                  <div className="relative w-full aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${
                        url.split("v=")[1]
                      }`}
                      title="YouTube video player"
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              ))}
            {/* 이미지 갤러리 섹션 */}
            {images.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">공연 사진</h3>
                <div className="grid grid-cols-2 gap-4">
                  {images.map((image, index) => (
                    <Dialog key={index}>
                      <DialogTrigger asChild>
                        <div
                          key={index}
                          className="relative aspect-square cursor-pointer"
                        >
                          <Image
                            src={image}
                            alt={`공연 사진 ${index + 1}`}
                            fill
                            className="object-cover rounded-lg hover:opacity-90 transition-opacity"
                          />
                        </div>
                      </DialogTrigger>
                      <DialogContent
                        aria-describedby={undefined}
                        className="sm:max-w-[1000px] w-full p-6"
                      >
                        <DialogHeader>
                          <DialogTitle>
                            <span className="text-2xl font-bold">
                              {concert.title}
                            </span>
                          </DialogTitle>
                          <DialogDescription>
                            <span className="text-md">
                              {concert.date}, {concert.place}
                            </span>
                          </DialogDescription>
                        </DialogHeader>
                        <div className="relative w-full">
                          <Image
                            src={image}
                            alt={`공연 사진 ${index + 1}`}
                            width={500}
                            height={500}
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
