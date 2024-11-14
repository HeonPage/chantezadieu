"use client";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function page() {
  return (
    <div className="flex flex-col gap-3">
      <div className="mobile-size:hidden flex flex-col gap-1">
        <Skeleton className="h-[32px] w-full rounded-lg" />
        <Skeleton className="h-4 w-full" />
      </div>
      <div color="transparent" className="flex flex-col gap-3">
        <div className="grid desktop-size:grid-cols-4 tablet-size:grid-cols-3 mobile-size:grid-cols-2 justify-between gap-6">
          <Skeleton className="h-12 w-full rounded-lg" />
          <Skeleton className="h-12 w-full rounded-lg" />
        </div>
        <Skeleton className="mt-10 h-64 w-full rounded-lg" />
        <div className="flex flex-col justify-between gap-4">
          {[...Array(5)].map((_, index) => (
            <Skeleton key={"s" + index} className="h-14 w-full rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
}
