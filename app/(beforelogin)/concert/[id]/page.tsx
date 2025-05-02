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
      <div className="h-[200px] relative flex flex-col items-center justify-center overflow-hidden cursor-pointer text-center mb-5 rounded-lg">
        <Image
          src={`${images[0]}`}
          alt="Banner"
          fill
          className="object-cover"
        />
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
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden my-8">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 border-b pb-4">
            {concert.title}
          </h1>

          {concert.performers && (
            <>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <span className="material-icons mr-2">날짜/시간 : </span>
                    {concert.date}
                  </div>
                  <div className="flex items-center">
                    <span className="material-icons mr-2">장소</span>
                    {concert.place}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    {concert.desc}
                  </p>
                </div>

                {concert.program && (
                  <div className="bg-white rounded-lg">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      프로그램
                    </h2>
                    <div className="space-y-4">
                      {Object.entries(concert.program).map(
                        ([partName, pieces], index) => (
                          <div
                            key={index}
                            className="bg-gray-50 rounded-lg p-4"
                          >
                            <h3 className="font-semibold text-gray-900 mb-2">
                              {partName}
                            </h3>
                            <ul className="space-y-2">
                              {pieces?.map(
                                (piece: string, pieceIndex: number) => (
                                  <li
                                    key={pieceIndex}
                                    className="text-gray-700 pl-4 border-l-2 border-gray-300"
                                  >
                                    {piece}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

                <div className="bg-white rounded-lg">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    출연진
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded">
                      <p className="mb-2">
                        <span className="font-semibold text-gray-900">
                          지휘:
                        </span>{" "}
                        <span className="text-gray-700">
                          {concert.performers?.conductor}
                        </span>
                      </p>
                      <p>
                        <span className="font-semibold text-gray-900">
                          합창:
                        </span>{" "}
                        <span className="text-gray-700">
                          {concert.performers?.choir}
                        </span>
                      </p>
                      <p>
                        <span className="font-semibold text-gray-900">
                          오케스트라:
                        </span>{" "}
                        <span className="text-gray-700">
                          {concert.performers?.orchestra}
                        </span>
                      </p>
                    </div>

                    {concert.performers?.soloists && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2">
                          솔리스트
                        </h3>
                        {Object.entries(concert.performers.soloists).map(
                          ([role, names]) => (
                            <p key={role} className="mb-1">
                              <span className="font-medium text-gray-900">
                                {role}:
                              </span>{" "}
                              <span className="text-gray-700">
                                {Array.isArray(names)
                                  ? names.join(", ")
                                  : names}
                              </span>
                            </p>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="mt-8 bg-gray-50 p-4 rounded-lg">
            <p>
              <span className="font-semibold text-gray-900">주최:</span>{" "}
              <span className="text-gray-700">{concert.organizer}</span>
            </p>
          </div>

          {concert.youtube_url && (
            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                공연 영상
              </h2>
              <div className="space-y-6">
                {concert.youtube_url.map((url, index) => (
                  <div
                    key={url}
                    className="aspect-video rounded-lg overflow-hidden shadow-lg"
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${
                        url.split("v=")[1]
                      }`}
                      title="YouTube video player"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {images.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                공연 사진
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <div className="relative aspect-square cursor-pointer rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <Image
                          src={image}
                          alt={`공연 사진 ${index + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[1000px] w-full p-6">
                      <DialogHeader>
                        <DialogTitle>
                          <span className="text-2xl font-bold text-gray-900">
                            {concert.title}
                          </span>
                        </DialogTitle>
                        <DialogDescription>
                          <span className="text-gray-600">
                            {concert.date}, {concert.place}
                          </span>
                        </DialogDescription>
                      </DialogHeader>
                      <div className="relative w-full rounded-lg overflow-hidden">
                        <Image
                          src={image}
                          alt={`공연 사진 ${index + 1}`}
                          width={1000}
                          height={1000}
                          className="object-contain"
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
    </>
  );
}
