"use client";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function page() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <Skeleton className="h-[200px] w-full rounded-lg" />
      </div>
      <div color="transparent" className="flex flex-col gap-3">
        <div className="grid desktop-size:grid-cols-4 tablet-size:grid-cols-3 mobile-size:grid-cols-2 justify-between gap-6">
          {[...Array(16)].map((_, index) => (
            <Skeleton key={"s" + index} className="h-24 w-full rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
}
