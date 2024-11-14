import React from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IConcert } from "@/types/IConcert";
const ConcertPoster = ({ concert }: { concert: IConcert }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight">
          <Image
            alt={"Concert Poster"}
            className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
            style={{ transform: "translate3d(0, 0, 0)" }}
            src={concert.img_url}
            width={720}
            height={480}
            sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
            placeholder="blur"
            blurDataURL={concert.blurData_url}
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
            alt={"concert Poster"}
            src={concert.img_url}
            width={500}
            height={500}
            placeholder="blur"
            blurDataURL={concert.blurData_url}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConcertPoster;
