"use client";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function page() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <Skeleton className="h-16 w-full rounded-lg" />
      </div>
      <div color="transparent" className="flex flex-col gap-3">
        <div className="mobile-size:hidden flex flex-row h-full justify-between gap-6">
          <Skeleton className="h-[12rem] w-1/3 rounded-lg" />
          <div className="flex flex-col w-2/3 gap-2">
            <Skeleton className="h-[1rem] w-full rounded-lg" />
            <Skeleton className="h-[1rem] w-full rounded-lg" />
            <Skeleton className="h-[1rem] w-full rounded-lg" />
            <Skeleton className="h-[1rem] w-full rounded-lg" />
            <Skeleton className="h-[1rem] w-full rounded-lg" />
            <Skeleton className="h-[1rem] w-full rounded-lg" />
            <Skeleton className="h-[1rem] w-full rounded-lg" />
            <Skeleton className="h-[1rem] w-full rounded-lg" />
          </div>
        </div>
        <div className="desktop-size:hidden tablet-size:hidden grid grid-cols-2 h-full justify-between gap-6">
          <Skeleton className="h-[10rem] w-full rounded-lg" />
          <Skeleton className="h-[10rem] w-full rounded-lg" />
        </div>
        <Skeleton className="h-[20rem] w-full rounded-lg" />
        <div className="w-full leading-relaxed"></div>
      </div>
    </div>
  );
}
