"use client";
import React, { useMemo, useState } from "react";
import PageHeader from "@/app/_component/PageHeader";
import ConcertCard from "./_component/ConcertCard";
import { concertYear, sortedConcerts } from "./_lib/getConcert";
import { IConcert } from "@/types/IConcert";
import { cn } from "@/lib/utils";

export default function page() {
  const concerts = useMemo(() => sortedConcerts(), []);
  const byYear = useMemo(() => {
    const map = new Map<string, IConcert[]>();
    concerts.forEach((c) => {
      const y = concertYear(c);
      map.set(y, [...(map.get(y) ?? []), c]);
    });
    return Array.from(map.entries());
  }, [concerts]);
  const [year, setYear] = useState<string>("all");
  const visible = year === "all" ? byYear : byYear.filter(([y]) => y === year);

  return (
    <>
      <PageHeader
        eyebrow="Concerts"
        title="연주회"
        description={`샹떼 자 듀 합창단이 걸어온 무대의 기록입니다. 총 ${concerts.length}회의 연주를 연도별로 살펴보세요.`}
      />

      <div className="sticky top-[var(--header-h)] z-30 border-b border-border/70 bg-background/90 backdrop-blur-md">
        <div className="container-page">
          <div className="flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {[["all", "전체"], ...byYear.map(([y]) => [y, y])].map(
              ([value, label]) => (
                <button
                  key={value}
                  onClick={() => setYear(value)}
                  className={cn(
                    "shrink-0 rounded-full border px-4 py-1.5 text-sm transition-colors",
                    year === value
                      ? "border-navy bg-navy text-white"
                      : "border-border bg-card text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                  )}
                >
                  {label}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      <div className="container-page py-14 md:py-20">
        <div className="space-y-20">
          {visible.map(([y, list]) => (
            <section
              key={y}
              className="grid gap-8 border-t border-border/70 pt-10 lg:grid-cols-12"
            >
              <div className="lg:col-span-3">
                <div className="lg:sticky lg:top-[calc(var(--header-h)+5rem)]">
                  <h2 className="font-display text-5xl font-medium leading-none md:text-6xl">
                    {y}
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {list.length}개의 연주
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:col-span-9">
                {list.map((concert) => (
                  <ConcertCard
                    key={concert.id}
                    concert={concert}
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 280px"
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
