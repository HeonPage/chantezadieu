"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { IConcert } from "@/types/IConcert";

export default function PhotoGallery({
  images,
  concert,
}: {
  images: string[];
  concert: IConcert;
}) {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;
  const go = (d: number) =>
    setIndex((i) => (i === null ? i : (i + d + images.length) % images.length));

  return (
    <>
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setIndex(i)}
            className="group relative aspect-square cursor-zoom-in overflow-hidden rounded-sm bg-muted"
          >
            <Image
              src={src}
              alt={`${concert.title} 공연 사진 ${i + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </button>
        ))}
      </div>
      <Dialog open={open} onOpenChange={(o) => !o && setIndex(null)}>
        <DialogContent
          aria-describedby={undefined}
          className="w-[94vw] max-w-5xl border-0 bg-transparent p-0 shadow-none"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") go(1);
            if (e.key === "ArrowLeft") go(-1);
          }}
        >
          <DialogTitle className="sr-only">{concert.title}</DialogTitle>
          {open && (
            <div className="relative">
              <Image
                src={images[index!]}
                alt={`${concert.title} 공연 사진 ${index! + 1}`}
                width={1600}
                height={1100}
                sizes="94vw"
                className="mx-auto h-auto max-h-[82vh] w-auto rounded-sm object-contain"
              />
              <div className="mt-3 flex items-center justify-between text-sm text-white/80">
                <span className="line-clamp-1">{concert.title}</span>
                <span className="shrink-0 font-display">
                  {index! + 1} / {images.length}
                </span>
              </div>
              {images.length > 1 && (
                <>
                  <button
                    aria-label="이전 사진"
                    onClick={() => go(-1)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur hover:bg-black/60"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    aria-label="다음 사진"
                    onClick={() => go(1)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur hover:bg-black/60"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
