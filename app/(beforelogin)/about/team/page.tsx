import React from "react";
import Breadcrumb from "@/app/_component/Breadcrumb";
import { cn } from "@/lib/utils";
import { IProfile } from "@/types/IProfile";
import Image from "next/image";
export default async function page() {
  return (
    <>
      <div>
        <div className="flex flex-col gap-6 ">
          <Breadcrumb
            title={"조직도"}
            description="Chantez a dieu"
            link_url="/about/team"
          />
          <div className="mx-auto">
            <div color="transparent" className="flex flex-col gap-6">
              <div className="flex flex-row mobile-size:flex-col w-full mobile-size:gap-6 tablet-size:gap-12 desktop-size:gap-16 h-full justify-between ">
                <Image
                  alt={"team"}
                  src="/organization.png"
                  width={1500}
                  height={800}
                />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
