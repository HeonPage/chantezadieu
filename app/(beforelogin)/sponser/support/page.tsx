"use client";
import Image from "next/image";
import React from "react";
import Breadcrumb from "@/app/_component/Breadcrumb";
import { blurData_url } from "@/utils/utils";

export default function page() {
  return (
    <div className="flex flex-col gap-6 ">
      <Breadcrumb
        title={"후원 안내"}
        description="Chantez a dieu"
        link_url="/contact/support"
      />
      <div color="transparent" className="flex flex-col gap-6">
        <div className="flex flex-row tablet-size:flex-col mobile-size:flex-col w-full desktop-size:gap-10 h-full justify-between gap-6">
          <div className="h-[16rem] w-full desktop-size:max-w-64 rounded-lg shrink-0">
            <Image
              width={768}
              height={768}
              alt="O.B. image"
              src={`http://glee.or.kr/files/attach/images/44371/074/061/7aa5a4530f17c9a946e2e81ad5260b22.jpg`}
              className="h-full rounded-lg w-full object-cover"
              placeholder="blur"
              blurDataURL={blurData_url}
            />
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="p-2 w-full leading-relaxed flex flex-col gap-2">
              <p className="font-bold text-xl">
                함께 울리는 화음, 함께 나누는 감동
              </p>
              <p className="text-sm leading-relaxed">
                은 음악을 통해 세상에 아름다운 화음을 전하고 있습니다. 그 여정
                속에서 귀하의 후원은 우리의 목소리에 힘을 더해줍니다. 당신의
                따뜻한 마음이 우리의 무대를 더욱 빛나게 하고, 새로운 곡을 선보일
                수 있는 가능성을 열어줍니다. 나아가 음악을 사랑하는 많은
                이들에게 잊지 못할 감동을 선사하는 소중한 밑거름이 될 것입니다.
                후원은 하나의 음표가 아닌, 수많은 음표가 모여 이루는 하나의
                화음과 같습니다. 귀하의 후원이 저희에게 더 큰 도전과 성장을
                가능케 할 것이며, 우리의 음악은 그 감사를 담아 더 멀리, 더 깊이
                울려 퍼질 것입니다.
              </p>
            </div>
            <div className="p-2 border-2 rounded-md">
              <div className="font-bold">후원 계좌</div>
              <div className="text-sm">
                우리은행 1006-201-304091 연세남성합창단O B
              </div>
            </div>
            <div className="px-2 text-xs">
              후원문의 : ☎<a href={`tel:010-8783-8363`}>010-8783-8363</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
