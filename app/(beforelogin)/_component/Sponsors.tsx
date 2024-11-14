"use client";
import React from "react";
import Slider from "./Slider";
import { mainSponsorData } from "../_lib/getSponsors";
import { Libre_Baskerville } from "next/font/google";
const font_en = Libre_Baskerville({ subsets: ["latin"], weight: ["400"] });

const Sponsors = () => {
  return (
    <div className="flex flex-col text-center gap-8 mb-[2rem]">
      <h1 className="mobile-size:text-4xl desktop-size:text-4xl tracking-wide">
        <span className={font_en.className}>Sponsors</span>
      </h1>
      <Slider duration={20} pauseOnHover>
        {mainSponsorData.map((logo, index) => {
          return (
            <Slider.Slide key={index}>
              <img
                src={logo.path}
                alt={logo.name}
                className="w-24 brightness-0 dark:brightness-100"
              />
            </Slider.Slide>
          );
        })}
      </Slider>
    </div>
  );
};

export default Sponsors;
