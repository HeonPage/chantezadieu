"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const HistoryNav = () => {
  const pathname = usePathname();
  return (
    <div className="grid grid-cols-6 place-items-center desktop-size:place-items-start mobile-size:grid-cols-2 gap-3 pb-6">
      <Link href={`/about/history/yb`}>
        <Button
          variant="outline"
          className={cn(
            "min-w-28 font-semibold px-4",
            pathname === `/history/yb`
              ? "text-black font-semibold bg-slate-200"
              : ""
          )}
        >
          Y.B.
        </Button>
      </Link>
      <Link href={`/about/history/ob`}>
        <Button
          variant="outline"
          className={cn(
            "min-w-28 font-semibold px-4",
            pathname === `/history/ob`
              ? "text-black font-semibold bg-slate-200"
              : ""
          )}
        >
          O.B.
        </Button>
      </Link>
    </div>
  );
};

export default HistoryNav;
