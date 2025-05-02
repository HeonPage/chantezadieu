"use client";
import Breadcrumb from "@/app/_component/Breadcrumb";
import { Poster } from "./_component/Poster";
import { concertList } from "./_lib/getConcert";
import { IConcert } from "@/types/IConcert";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function page() {
  const filterConcertsByYear = (
    concerts: IConcert[],
    year: string
  ): IConcert[] => {
    return concerts.filter(
      (concert) => concert.id?.toString().slice(0, 4) === year
    );
  };

  const years = [
    "2024",
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
  ];
  const concertListsByYear = years.reduce((acc, year) => {
    acc[year] = filterConcertsByYear(concertList, year);
    return acc;
  }, {} as Record<string, IConcert[]>);

  const MobileCarousel = ({ concerts }: { concerts: IConcert[] }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
      align: "center",
      containScroll: "trimSnaps",
      loop: true,
    });

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();

    return (
      <div className="relative px-20">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {concerts.map((concert, index) => (
              <div
                key={concert.title + index}
                className="flex-[0_0_100%] min-w-0"
              >
                <div className="w-full">
                  <Poster concert={concert} />
                </div>
              </div>
            ))}
          </div>
        </div>
        {concerts.length >= 2 && (
          <>
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-10"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-10"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </>
        )}
      </div>
    );
  };

  const renderSection = (title: string, list: IConcert[]) => (
    <div className="part-section">
      <Breadcrumb title={title + "년"} description="" link_url="#" />
      {/* 모바일 뷰 */}
      <div className="mobile-size:block hidden">
        <MobileCarousel concerts={list} />
      </div>
      {/* 데스크톱/태블릿 뷰 */}
      <div className="grid grid-cols-5 tablet-size:grid-cols-4 mobile-size:hidden gap-6 justify-center">
        {list.map((concert: IConcert, index: number) => (
          <div key={concert.title + index}>
            <Poster concert={concert} />
          </div>
        ))}
      </div>
    </div>
  );

  const renderConcertSections = () => {
    return Object.entries(concertListsByYear)
      .sort(([a], [b]) => Number(b) - Number(a)) // 연도를 내림차순으로 정렬
      .map(([year, concerts]) => (
        <React.Fragment key={year}>
          {renderSection(year, concerts)}
        </React.Fragment>
      ));
  };

  return (
    <>
      <div className="flex flex-col gap-6">
        <Breadcrumb
          title={"연주회"}
          description="Chantez a dieu"
          link_url="/concert"
        />
        <div className="space-y-12">{renderConcertSections()}</div>
      </div>
    </>
  );
}
