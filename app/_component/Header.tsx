"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Youtube, Instagram } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { navMenu, siteInfo } from "../_lib/navMenu";

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const overHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const transparent = overHero && !scrolled;

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-colors duration-500",
        transparent
          ? "bg-transparent text-white"
          : "border-b border-border/70 bg-background/85 text-foreground backdrop-blur-md supports-[backdrop-filter]:bg-background/75"
      )}
    >
      <div className="container-page flex h-[var(--header-h)] items-center justify-between gap-6">
        <Link
          href="/"
          aria-label="샹떼 자 듀 합창단 홈"
          className="relative shrink-0"
        >
          <Image
            src="/logo3.png"
            width={364}
            height={97}
            alt="Chantez à Dieu"
            priority
            className={cn(
              "h-10 w-auto transition-[filter] duration-500 md:h-11",
              transparent && "brightness-0 invert"
            )}
          />
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-10 lg:flex">
          <ul className="flex items-center gap-9">
            {navMenu.map((item) => (
              <li key={item.title} className="group relative">
                <Link
                  href={item.link_url}
                  data-active={isActive(pathname, item.link_url)}
                  className="link-underline flex items-center gap-1 py-2 text-[0.95rem] font-medium tracking-tight"
                >
                  {item.title}
                  {item.sub && (
                    <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </Link>
                {item.sub && (
                  <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <ul className="w-56 overflow-hidden rounded-md border border-border/80 bg-card p-2 text-foreground shadow-[0_20px_50px_-20px_rgba(14,22,36,0.35)]">
                      {item.sub.map((sub) => (
                        <li key={sub.link_url}>
                          <Link
                            href={sub.link_url}
                            className={cn(
                              "flex items-baseline justify-between rounded px-3 py-2.5 text-sm transition-colors hover:bg-muted",
                              pathname === sub.link_url && "text-primary"
                            )}
                          >
                            <span>{sub.title}</span>
                            <span className="font-display text-xs italic text-muted-foreground">
                              {sub.en}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <Link
            href="/sponser"
            className={cn(
              "rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-300",
              transparent
                ? "border-white/60 hover:bg-white hover:text-navy-ink"
                : "border-burgundy bg-burgundy text-white hover:bg-burgundy-light"
            )}
          >
            후원하기
          </Link>
        </nav>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              aria-label="메뉴 열기"
              className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-foreground/5 lg:hidden"
            >
              <Menu className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            aria-describedby={undefined}
            className="flex w-full flex-col border-l-0 bg-navy-ink p-0 text-white sm:max-w-md"
          >
            <SheetTitle className="sr-only">네비게이션 메뉴</SheetTitle>
            <div className="flex h-[var(--header-h)] items-center justify-between px-6">
              <Image
                src="/logo3.png"
                width={364}
                height={97}
                alt="Chantez à Dieu"
                className="h-10 w-auto brightness-0 invert"
              />
              <SheetClose
                aria-label="메뉴 닫기"
                className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-white/10"
              >
                <X className="h-6 w-6" strokeWidth={1.5} />
              </SheetClose>
            </div>
            <nav className="flex-1 overflow-y-auto px-6 pt-6">
              <ul className="divide-y divide-white/10 border-y border-white/10">
                {navMenu.map((item) => (
                  <li key={item.title} className="py-5">
                    <Link
                      href={item.link_url}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline justify-between"
                    >
                      <span className="font-serif text-2xl">{item.title}</span>
                      <span className="font-display text-sm italic text-gold-light">
                        {item.en}
                      </span>
                    </Link>
                    {item.sub && (
                      <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
                        {item.sub.map((sub) => (
                          <li key={sub.link_url}>
                            <Link
                              href={sub.link_url}
                              onClick={() => setOpen(false)}
                              className={cn(
                                "text-sm text-white/60 transition-colors hover:text-white",
                                pathname === sub.link_url && "text-white"
                              )}
                            >
                              {sub.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <Link
                href="/sponser"
                onClick={() => setOpen(false)}
                className="mt-8 flex w-full items-center justify-center rounded-full bg-burgundy py-3.5 text-sm font-medium transition-colors hover:bg-burgundy-light"
              >
                후원으로 함께하기
              </Link>
            </nav>
            <div className="flex items-center justify-between border-t border-white/10 px-6 py-5 text-xs text-white/50">
              <span className="font-display text-sm italic">
                {siteInfo.nameEn}
              </span>
              <div className="flex gap-1">
                <a
                  href={siteInfo.youtube}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10 hover:text-white"
                >
                  <Youtube className="h-4 w-4" />
                </a>
                <a
                  href={siteInfo.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10 hover:text-white"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
