"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IConcert } from "@/types/IConcert";
import { blurData_url } from "@/utils/utils";
import { Badge } from "@/components/ui/badge";

type Props = {
  concert: IConcert;
};
export const Poster = ({ concert }: Props) => {
  return (
    <>
      {/* Desktop */}
      <div className="desktop-visible border-b">
        <Link href={`/concert/${concert.id}`}>
          <div className="flex flex-col gap-2 items-center justify-self-center">
            <div
              key={concert.id}
              className="after:content group relative block w-full cursor-pointer after:pointer-events-none after:absolute after:inset-0 after:shadow-highlight"
            >
              <Image
                width={768}
                height={768}
                className="h-100 w-auto object-cover rounded-lg shadow-md aspect-[11/16]"
                alt="concert alt"
                src={concert.img_url}
                placeholder="blur"
                blurDataURL={
                  concert.blurData_url ? concert.blurData_url : blurData_url
                }
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
              />
            </div>
            {/* <div className="flex flex-col pb-2">
              <div className="flex gap-2 text-center font-semibold items-center">
                <span className="text-sm">{concert.title}</span>
              </div>
              <div className="text-center text-xs font-semibold">
                {concert.date}
              </div>
            </div> */}
          </div>
        </Link>
      </div>
      {/* Mobile */}
      <div key={concert.title} className="mobile-visible tablet-size:hidden">
        <Link href={`/concert/${concert.id}`}>
          <div className="flex flex-col gap-2">
            <div className="relative w-full h-72 mobile-size:h-52 border-gray-600 mobile-size:rounded-lg">
              <Image
                src={concert.img_url}
                width={300}
                height={500}
                alt="Your image"
                className="w-full h-full object-cover rounded-lg border-2 shadow-md aspect-[3/4]"
                placeholder="blur"
                blurDataURL={
                  concert.blurData_url ? concert.blurData_url : blurData_url
                }
                sizes="(max-width: 100px) 40vw,
                  (max-width: 400px) 50vw,
                  (max-width: 600px) 60vw,
                  60vw"
              />
            </div>
            {/* <div className="flex gap-1 justify-between items-center text-sm">
              <div className="font-semibold text-xs text-center tracking-tighter">
                {concert.title}
              </div>
            </div> */}
          </div>
        </Link>
      </div>
    </>
  );
};
