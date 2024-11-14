"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { setCookie } from "@/utils/utils";

export function Popup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Function to get the value of a specific cookie
    const getCookieValue = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    };

    // Check for the specific cookie
    const cookieCheck = getCookieValue("yonselGleeClubPopup");

    setOpen(cookieCheck == "true" ? false : true);
  }, []);
  const onClick = () => {
    //   오늘 하루동안 보지 않기
    setCookie("yonselGleeClubPopup", "true", 1);
    setOpen(false);
    return;
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        aria-describedby={undefined}
        className="desktop-size:max-w-[425px] w-4/5"
      >
        <DialogHeader>
          <DialogTitle>
            <span className="text-2xl font-bold">Upcoming Event</span>
          </DialogTitle>
        </DialogHeader>
        <a href="https://www.chantezadieu.com/40y-ann-concert" target="_blank">
          <img src="/popup/poster.webp" width={462} height={654} alt="poster" />
        </a>
        <DialogFooter>
          <div className="flex flex-col gap-2">
            <div>
              <a
                href="https://www.chantezadieu.com/40y-ann-concert"
                target="_blank"
              >
                <Button className="w-full">자세히</Button>
              </a>
            </div>
            <div className="desktop-visible tablet-size:hidden flex items-center space-x-2">
              <Checkbox id="terms" onClick={() => onClick()} />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                오늘 하루동안 보지 않기
              </label>
            </div>
            <div className="mobile-visible flex items-center space-x-2">
              <Button className="w-full" onClick={() => onClick()}>
                오늘 하루동안 보지 않기
              </Button>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
