"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ISidebar {
  title: string;
  link_url: string;
  sub?: ISidebar[];
}
const Sidebar = ({ title, list }: { title: string; list: ISidebar[] }) => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-bold">{title}</h1>
      {list.map((list) => (
        <div className="flex flex-col gap-2" key={list.title}>
          <Link
            href={list.link_url}
            className={cn(
              "text-sm text-gray-400 hover:underline hover:cursor-pointer",
              pathname === list.link_url ? "font-semibold" : ""
            )}
          >
            {list.title}
          </Link>
          {list.sub?.map((sub) => (
            <Link
              key={sub.title}
              href={sub.link_url}
              className={cn(
                "ml-4 text-sm text-gray-400 hover:underline hover:cursor-pointer",
                pathname === sub.link_url ? "font-semibold" : ""
              )}
            >
              {sub.title}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
