"use client";
import React from "react";
import Image from "next/image";
import { ICloudinaryImage } from "@/types/ICloudinaryImage";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
export const GalleryMuseum = ({
  images,
  slug,
}: {
  images: ICloudinaryImage[];
  slug: string;
}) => {
  return (
    <>
      {images.map(({ id, public_id, format, blurData_url }) => (
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
                placeholder="blur"
                blurDataURL={blurData_url}
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
              />
            </div>
          </DialogTrigger>
          <DialogContent
            aria-describedby={undefined}
            className="desktop-size:max-h-[800px] w-full p-6"
          >
            <DialogHeader>
              <DialogTitle>
                <span className="mobile-size:text-base desktop-size:text-2xl font-bold">
                  갤러리
                </span>
              </DialogTitle>
              <DialogDescription>
                <span className="mobile-size:text-sm desktop-size:text-md">
                  {slug}
                </span>
              </DialogDescription>
            </DialogHeader>
            <div className="relative w-full">
              <Image
                alt={public_id}
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                width={1000}
                height={1000}
                placeholder="blur"
                blurDataURL={blurData_url}
              />
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </>
  );
};
