import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { IConcert } from "@/types/IConcert";
import { blurData_url } from "@/utils/utils";
import { cn } from "@/lib/utils";

type Props = {
  concert: IConcert;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

export default function ConcertCard({
  concert,
  priority,
  className,
  sizes = "(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 360px",
}: Props) {
  return (
    <Link
      href={`/concert/${concert.id}`}
      className={cn("group block focus-visible:outline-none", className)}
    >
      <div className="relative aspect-[5/7] overflow-hidden rounded-sm bg-muted shadow-[0_1px_2px_rgba(14,22,36,0.06)] ring-1 ring-black/5 transition-shadow duration-500 group-hover:shadow-[0_24px_48px_-24px_rgba(14,22,36,0.45)] group-focus-visible:ring-2 group-focus-visible:ring-primary">
        <Image
          src={concert.img_url}
          alt={`${concert.title} 포스터`}
          fill
          sizes={sizes}
          priority={priority}
          placeholder="blur"
          blurDataURL={concert.blurData_url || blurData_url}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-4 space-y-1.5">
        <p className="text-xs font-medium tracking-wide text-gold">
          {concert.date}
        </p>
        <h3 className="line-clamp-2 font-serif text-[1.05rem] font-medium leading-snug tracking-tight transition-colors group-hover:text-primary">
          {concert.title}
        </h3>
        {concert.place && (
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3 shrink-0" />
            <span className="line-clamp-1">{concert.place}</span>
          </p>
        )}
      </div>
    </Link>
  );
}
