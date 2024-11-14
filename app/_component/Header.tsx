import Link from "next/link";
import React from "react";
import Image from "next/image";

import DesktopNavigation from "./DesktopNavigation";
import MobileDrawer from "./MobileDrawer";
const Header = async () => {
  return (
    <>
      <nav className="z-20 desktop-visible w-full flex justify-center border-b border-b-foreground/10 h-16 sticky top-0 bg-white dark:bg-black">
        {/* Desktop */}
        <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm ">
          <div className="flex gap-5 font-semibold text-xl shrink-0">
            <Link href={"/"}>
              <Image src={"/logo3.png"} width={300} height={150} alt={"logo"} />
            </Link>
          </div>
          <div className="flex gap-3 items-center">
            <DesktopNavigation />
          </div>
        </div>
      </nav>
      {/* Mobile */}
      <MobileDrawer />
    </>
  );
};

export default Header;
