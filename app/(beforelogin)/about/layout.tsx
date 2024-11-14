"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { aboutSidebar } from "./_lib/aboutSidebar";
import Sidebar from "@/app/_component/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="flex-1 w-full flex flex-row">
      <div className="tablet-size:hidden desktop-visible desktop-size:w-[200px] py-6 px-2">
        <Sidebar title={"합창단 소개"} list={aboutSidebar} />
      </div>
      <div className="w-full flex flex-col">
        <div className="mobile-visible">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            value={isOpen ? "about_list" : "undefined"}
            onValueChange={(value) => setIsOpen(!!value)}
          >
            <AccordionItem value={`about_list`}>
              <AccordionTrigger className="container">
                {"합창단 소개"}
              </AccordionTrigger>
              {aboutSidebar.map((list, index) => (
                <AccordionContent
                  key={list.title}
                  className="container"
                  onClick={() => {
                    router.push(list.link_url);
                    setIsOpen(!isOpen);
                  }}
                >
                  <span className="cursor-pointer"> {list.title}</span>
                </AccordionContent>
              ))}
            </AccordionItem>
          </Accordion>
        </div>
        <div className="container w-full desktop-size:w-[800px] py-6">
          {children}
        </div>
      </div>
    </div>
  );
}
