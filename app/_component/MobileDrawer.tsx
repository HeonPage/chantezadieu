"use client";
import React, { useState } from "react";
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
import { Button } from "../../components/ui/button";
import { IoIosMenu } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { navMenu } from "../_lib/navMenu";

const MobileDrawer = () => {
  const currentYear = new Date().getFullYear();
  const [open, setOpen] = useState(false);
  return (
    <nav className="mobile-visible tablet-size:hidden w-full flex justify-between items-center border-b border-b-foreground/10 h-16 px-2 sticky top-0  bg-white dark:bg-black z-20">
      {/* Mobile Header */}
      <div>
        <Link href={"/"}>
          <Image
            src={"/logo_mobile.png"}
            width={200}
            height={200}
            alt={"logo"}
            className="rounded-lg -ml-[30px]"
          />
        </Link>
      </div>
      {/* Mobile Drawer */}
      <div className="flex">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              id="drawer"
              aria-label="drawer"
              variant="ghost"
              className="p-0 w-12 h-12"
            >
              <IoIosMenu size={40} />
            </Button>
          </SheetTrigger>
          <SheetContent aria-describedby={undefined}>
            <SheetTitle className="sr-only">네비게이션 메뉴</SheetTitle>
            <div className="flex flex-col justify-between h-full">
              <div className="grid grid-flow-row gap-6">
                <Link href="/" onClick={() => setOpen(false)}>
                  <div className="flex items-center space-x-4 rounded-md border">
                    <div className="flex-1 space-y-1 p-4">
                      <p className="text font-bold leading-none">
                        샹떼 자 듀 합창단
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Chantez a dieu
                      </p>
                    </div>
                  </div>
                </Link>
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
                      Copyright <br />
                      {currentYear} Chantez a dieu
                    </p>
                  </div>
                </SheetClose>
              </SheetFooter>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default MobileDrawer;
