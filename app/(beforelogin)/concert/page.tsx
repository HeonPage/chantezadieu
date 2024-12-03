import Breadcrumb from "@/app/_component/Breadcrumb";
import { Poster } from "./_component/Poster";
import { concertList } from "./_lib/getConcert";
import { IConcert } from "@/types/IConcert";
import React from "react";

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

  const renderSection = (title: string, list: IConcert[]) => (
    <div className="part-section">
      <Breadcrumb title={title + "년"} description="" link_url="#" />
      <div className="grid grid-cols-5 tablet-size:grid-cols-4 mobile-size:grid-cols-2 gap-6 justify-center">
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
