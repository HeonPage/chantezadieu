"use client";
import React from "react";
import { ICloudinaryImage } from "@/types/ICloudinaryImage";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { IConcert } from "@/types/IConcert";
const ConcertMuseum = ({
  images,
  concert,
}: {
  images: ICloudinaryImage[];
  concert: IConcert;
}) => {
  return (
    <>
      {images.length !== 0 ? (
        images.map(({ id, public_id, format, blurData_url }) => (
          <Dialog key={public_id}>
            <DialogTrigger asChild>
              <div
                key={id}
                className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
              >
                <Image
                  alt={public_id}
                  className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                  style={{ transform: "translate3d(0, 0, 0)" }}
                  src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                  width={720}
                  height={480}
                  sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
                  placeholder="blur"
                  blurDataURL={blurData_url}
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
                    제{concert.no}회 {concert.age == "OB" && "O.B. "}
                    {concert.type == "ann" ? "정기연주회" : "5월의 노래축제"}
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
                  alt={public_id}
                  src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                  width={500}
                  height={500}
                  placeholder="blur"
                  blurDataURL={blurData_url}
                />
              </div>
            </DialogContent>
          </Dialog>
        ))
      ) : (
        <div className="text-sm flex flex-col gap-2">
          <div>사진과 영상을 준비중입니다.</div>
          <div>
            사진을 기증해주실 분은
            <a
              href="mailto:gleeclub.dev@gmail.com?subject=글리클럽 사진기증"
              className="text-blue-500"
            >
              gleeclub.dev@gmail.com
            </a>
            으로 보내주시길 부탁드립니다.
          </div>
        </div>
      )}
    </>
  );
};

export default ConcertMuseum;
