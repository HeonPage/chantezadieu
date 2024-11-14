import React from "react";
import Breadcrumb from "@/app/_component/Breadcrumb";
import Image from "next/image";
export default async function page() {
  return (
    <>
      <div>
        <div className="flex flex-col gap-6 ">
          <Breadcrumb
            title={"Logo"}
            description="Chantez a dieu"
            link_url="/about/team"
          />
          <div className="mx-auto">
            <div color="transparent" className="flex flex-col gap-6">
              <div className="flex flex-col mobile-size:flex-col w-full mobile-size:gap-6 tablet-size:gap-12 desktop-size:gap-16 h-full justify-between ">
                <Image
                  alt={"logo1"}
                  src="/logo.png"
                  width={1500}
                  height={800}
                />
                <Image
                  alt={"logo2"}
                  src="/logo2.png"
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
