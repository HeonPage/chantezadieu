import React from "react";
import Image from "next/image";
import { Expand } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IConcert } from "@/types/IConcert";

const ConcertPoster = ({ concert }: { concert: IConcert }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="group relative block w-full cursor-zoom-in overflow-hidden rounded-sm shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
          <Image
            alt={`${concert.title} 포스터`}
            src={concert.img_url}
            width={720}
            height={1008}
            priority
            sizes="(max-width: 768px) 280px, 33vw"
            className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <span className="absolute bottom-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
            <Expand className="h-4 w-4" />
          </span>
        </button>
      </DialogTrigger>
      <DialogContent
        aria-describedby={undefined}
        className="max-h-[92vh] w-[92vw] max-w-3xl overflow-y-auto border-0 bg-transparent p-0 shadow-none"
      >
        <DialogTitle className="sr-only">{concert.title}</DialogTitle>
        <Image
          alt={`${concert.title} 포스터`}
          src={concert.img_url}
          width={1200}
          height={1680}
          sizes="92vw"
          className="h-auto w-full rounded-sm"
        />
      </DialogContent>
    </Dialog>
  );
};

export default ConcertPoster;
