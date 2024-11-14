"use client";
import React, { useState } from "react";
import Footer from "./_component/Footer";
import DesktopNavigation from "./_component/DesktopNavigation";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IoIosMenu } from "react-icons/io";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { navMenu } from "./_lib/navMenu";
import { Button } from "@/components/ui/button";
const error = () => {
  const currentYear = new Date().getFullYear();
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col items-center">
      <nav className="z-20 desktop-visible w-full flex justify-center border-b border-b-foreground/10 h-16 sticky top-0 bg-white dark:bg-black">
        {/* Desktop */}
        <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm ">
          <div className="flex gap-5 font-semibold text-xl shrink-0">
            <Link href={"/"}>
              <Image src={"/logo3.png"} width={200} height={50} alt={"logo"} />
            </Link>
          </div>
          <div className="flex gap-3 items-center">
            <DesktopNavigation />
          </div>
        </div>
      </nav>
      {/* Mobile */}
      <nav className="mobile-visible tablet-size:hidden w-full flex justify-between items-center border-b border-b-foreground/10 h-16 px-2 sticky top-0 bg-white dark:bg-black z-10">
        {/* Mobile Header */}
        <div>
          <Link href={"/"}>
            <Image
              src={"/logo3.png"}
              width={50}
              height={50}
              alt={"logo"}
              className="rounded-lg"
            />
          </Link>
        </div>
        {/* Mobile Drawer */}
        <div className="flex">
          <ThemeSwitcher />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="p-0 w-12 h-12">
                <IoIosMenu size={40} />
              </Button>
            </SheetTrigger>
            <SheetContent aria-describedby="mobile drawer">
              <SheetTitle className="sr-only">네비게이션 메뉴</SheetTitle>
              <div className="flex flex-col justify-between h-full">
                <div className="grid grid-flow-row gap-6">
                  <div className=" flex items-center space-x-4 rounded-md border">
                    <div className="flex-1 space-y-1 p-4">
                      <p className="text font-bold leading-none">
                        연세남성합창단
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Yonsei Glee Glub
                      </p>
                    </div>
                  </div>
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full space-y-6"
                  >
                    {navMenu.map((list, index) =>
                      list.sub ? (
                        <AccordionItem key={list.title} value={list.title}>
                          <AccordionTrigger className="container px-0 pt-0">
                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                              {list.title}
                            </h4>
                          </AccordionTrigger>
                          {list.sub.map((sub, sub_index) => (
                            <AccordionContent key={sub.title} className="">
                              <Link
                                href={sub.link_url}
                                onClick={() => setOpen(false)}
                              >
                                <h4 className="scroll-m-20 tracking-tight">
                                  {sub.title}
                                </h4>
                              </Link>
                            </AccordionContent>
                          ))}
                        </AccordionItem>
                      ) : (
                        <Link
                          key={list.title}
                          href={list.link_url}
                          onClick={() => setOpen(false)}
                        >
                          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight border-b py-4">
                            {list.title}
                          </h4>
                        </Link>
                      )
                    )}
                  </Accordion>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <div className="flex flex-col gap-2 justify-end">
                      <p className="text-xs text-muted-foreground">
                        Copyright {currentYear} Yonsei GleeClub
                      </p>
                    </div>
                  </SheetClose>
                </SheetFooter>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
      <div className="py-20 flex-1 mobile-size:w-full tablet-size:w-full flex flex-col gap-4 items-center container">
        <div className="text-2xl font-bold">문제가 발생했습니다.</div>
        <Image
          width={300}
          height={300}
          alt="testimonial image"
          src={`/error.webp`}
          className="rounded-2xl"
          placeholder="blur"
          blurDataURL={
            "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoIAAgAAkA4JYwCdAEfaxi5sAD+8lz+i5X/9JzpoPbv2/s5bsZEkJlfyj5+iHBA0pCT3EbHtvl4AA=="
          }
        />
        <Link href={"/"}>
          <Button>처음으로 돌아가기</Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default error;
