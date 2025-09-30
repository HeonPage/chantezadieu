"use client";
import * as React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { ICloudinaryImage } from "@/types/ICloudinaryImage";
import { Libre_Baskerville } from "next/font/google";
const font = Libre_Baskerville({ subsets: ["latin"], weight: ["400"] });

interface ConcertsArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
  images: ICloudinaryImage[];
}

export default function MainCarousel({
  width,
  height,
  className,
  images,
  ...props
}: ConcertsArtworkProps) {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <div className="flex flex-col text-center gap-8 mb-[2rem]">
      <h1 className="text-4xl tracking-wide">
        <Link href={"/gallery"}>
          <span className={font.className}>Gallery</span>
        </Link>
      </h1>
      <Carousel
        // plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map(({ id, public_id, format, blurData_url }) => (
            <CarouselItem
              key={public_id}
              className="mobile-size:basis-1/2 tablet-size:basis-1/3 basis-1/5"
            >
              <Dialog key={public_id}>
                <DialogTrigger asChild>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-0">
                        <div className="overflow-hidden rounded-md">
                          <Image
                            alt={public_id}
                            className={cn(
                              "w-full h-full object-cover aspect-square cursor-pointer"
                            )}
                            style={{ transform: "translate3d(0, 0, 0)" }}
                            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                            width={width}
                            height={height}
                            placeholder="blur"
                            blurDataURL={blurData_url}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </DialogTrigger>
                <DialogContent
                  className="desktop-size:max-h-[800px] w-full p-6"
                  aria-describedby={undefined}
                >
                  <DialogHeader>
                    <DialogTitle></DialogTitle>
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="desktop-visible tablet-size:hidden" />
        <CarouselNext className="desktop-visible tablet-size:hidden" />
      </Carousel>
    </div>
  );
}
