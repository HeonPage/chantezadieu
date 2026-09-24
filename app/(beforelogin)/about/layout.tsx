"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { aboutSidebar } from "./_lib/aboutSidebar";
import PageHeader from "@/app/_component/PageHeader";
import { cn } from "@/lib/utils";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const current =
    aboutSidebar.find((s) => s.link_url === pathname) ?? aboutSidebar[0];
  return (
    <>
      <PageHeader eyebrow={current.en} title={current.title} />
      <nav className="sticky top-[var(--header-h)] z-30 border-b border-border/70 bg-background/90 backdrop-blur-md">
        <div className="container-page">
          <ul className="-mb-px flex gap-7 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {aboutSidebar.map((item) => {
              const active = pathname === item.link_url;
              return (
                <li key={item.link_url} className="shrink-0">
                  <Link
                    href={item.link_url}
                    className={cn(
                      "block border-b-2 py-4 text-sm transition-colors",
                      active
                        ? "border-primary font-medium text-foreground"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      <div className="container-page py-14 md:py-20">{children}</div>
    </>
  );
}
