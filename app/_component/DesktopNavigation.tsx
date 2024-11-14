"use client";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

import { ThemeSwitcher } from "../../components/theme-switcher";
import Link from "next/link";
import { navMenu } from "../_lib/navMenu";
import { aboutSidebar } from "../(beforelogin)/about/_lib/aboutSidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
const DesktopNavigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size={"sm"} className="w-content h-12">
                합창단 소개
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-content" align="start">
              <ul className="grid gap-1 p-2 w-content">
                {aboutSidebar.map((list, index) => (
                  <ListItem
                    key={list.title}
                    title={list.title}
                    href={list.link_url}
                  ></ListItem>
                ))}
              </ul>
            </DropdownMenuContent>
          </DropdownMenu>
        </NavigationMenuItem>
        {navMenu.slice(1).map((list, index) => (
          <NavigationMenuItem key={list.title}>
            <Link href={list.link_url} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {list.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
export default DesktopNavigation;
