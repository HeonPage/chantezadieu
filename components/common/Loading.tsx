"use client";

import React from "react";
import { Typewriter } from "nextjs-simple-typewriter";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-3xl font-bold">
        <Typewriter
          words={["Chantez a dieu"]}
          loop={10}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={1}
          delaySpeed={0}
        />
      </h1>
    </div>
  );
};

export default Loading;
