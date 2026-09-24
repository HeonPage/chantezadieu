import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  description?: string;
  link_url?: string;
  className?: string;
};

/** 섹션 제목 (영문 보조 라벨 포함) */
const Breadcrumb = ({ title, description, link_url, className }: Props) => {
  const inner = (
    <div className="space-y-1">
      {description && (
        <p className="font-display text-sm italic text-gold">{description}</p>
      )}
      <h2 className="font-serif text-2xl font-medium tracking-tight">
        {title}
      </h2>
    </div>
  );
  return (
    <div className={cn("flex items-center justify-between", className)}>
      {link_url && link_url !== "#" ? <Link href={link_url}>{inner}</Link> : inner}
    </div>
  );
};

export default Breadcrumb;
