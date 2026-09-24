import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: string;
  description?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
};

/** 서브페이지 상단 타이틀 영역 */
const PageHeader = ({
  eyebrow,
  title,
  description,
  className,
  children,
}: Props) => {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border/70 bg-[radial-gradient(ellipse_at_top_right,rgba(170,150,82,0.14),transparent_55%)]",
        className
      )}
    >
      <div className="container-page pb-10 pt-14 md:pb-14 md:pt-20">
        <span className="eyebrow animate-fade-up">{eyebrow}</span>
        <h1 className="mt-5 animate-fade-up font-serif text-4xl font-medium tracking-tight [animation-delay:80ms] md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl animate-fade-up leading-relaxed text-muted-foreground [animation-delay:160ms]">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default PageHeader;
