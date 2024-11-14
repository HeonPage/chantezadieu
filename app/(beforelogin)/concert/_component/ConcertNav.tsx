"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
type Props = {
  params: { age: string; type: string };
};
const ConcertNav = ({ params }: Props) => {
  const pathname = usePathname();
  const { age, type } = params;
  const validPaths = ["/concert/all/ann", "/concert/yb/ann", "/concert/ob/ann"];

  if (validPaths.includes(pathname))
    return (
      <div className="grid grid-cols-4 place-items-center desktop-size:place-items-start mobile-size:grid-cols-2 gap-3 pb-6">
        <Link href={`/concert/yb/${type}`}>
          <Button
            variant="outline"
            className={cn(
              "font-semibold px-4 min-w-[150px]",
              pathname === `/concert/yb/${type}`
                ? "text-black font-semibold bg-slate-200"
                : ""
            )}
          >
            Y.B.
          </Button>
        </Link>
        <Link href={`/concert/ob/${type}`}>
          <Button
            variant="outline"
            className={cn(
              "font-semibold px-4 min-w-[150px]",
              pathname === `/concert/ob/${type}`
                ? "text-black font-semibold bg-slate-200"
                : ""
            )}
          >
            O.B.
          </Button>
        </Link>
      </div>
    );
  else return;
};

export default ConcertNav;
