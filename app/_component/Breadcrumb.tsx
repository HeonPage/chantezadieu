import React from "react";
import { Libre_Baskerville } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
const font = Libre_Baskerville({ subsets: ["latin"], weight: ["400"] });

type Props = {
  title: string;
  description: string;
  link_url: string;
  className?: string;
};
const Breadcrumb = ({ title, description, link_url, className }: Props) => {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <Link href={link_url}>
        <div className="space-y-1 tablet-size:p-6">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          <p className={cn("text-sm text-muted-foreground", font.className)}>
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Breadcrumb;
