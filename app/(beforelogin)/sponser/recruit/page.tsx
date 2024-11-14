import Image from "next/image";
import React from "react";
import Breadcrumb from "@/app/_component/Breadcrumb";
import { Metadata } from "next";
import { webSiteMetadata } from "@/utils/metadata";
export const metadata: Metadata = webSiteMetadata("신입단원 모집");
export default function page() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col gap-6 ">
      <Breadcrumb
        title={"신입단원 모집"}
        description="Chantez a dieu"
        link_url="/contact/recruit"
      />
      <div color="transparent" className="flex flex-col gap-6">
        <div className="flex flex-row tablet-size:flex-col mobile-size:flex-col w-full desktop-size:gap-10 h-full justify-between gap-6">
          <div className="h-[16rem] w-full desktop-size:max-w-64 rounded-lg shrink-0">
            <Image
              width={768}
              height={768}
              alt="O.B. image"
              src={"/bg/bg07.jpg"}
              className="h-full rounded-lg w-full object-cover"
            />
          </div>
          <div className="w-full">
            <div className="mb-3 w-full leading-relaxed flex flex-col gap-4">
              <p className="text-xl font-bold">
                🎶 음악을 사랑하는 연세의 모든 남학우 여러분!
              </p>
              <p className="text-sm">
                당신의 목소리로 연세의 하모니를 완성할 시간입니다! 연세대학교
                남성합창단 글리클럽에서 {currentYear}년 신입단원을 모집합니다.
                저희는 1984년 창단 이래 연세의 전통을 이어오며, 다채로운 공연과
                감동을 선사해왔습니다.
              </p>
              <span className="font-bold">무엇을 경험할 수 있나요?</span>
              <ul className="text-sm flex flex-col gap-2">
                <li>
                  ✔️ 정기 연주회, 학교 행사, 외부 공연 등 다양한 무대에서의 활동
                </li>
                <li>✔️ 멋진 동료들과 함께하는 음악적 성장</li>
                <li>
                  ✔️ 선후배와의 끈끈한 우정과 추억 지원 자격 음악에 대한 열정만
                  있으면 누구나 환영합니다! (합창 경험이 없어도 OK!)
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p>
          <span className="font-bold pr-2">지원 방법</span>
          <a
            href="https://docs.google.com/forms/d/1meV6mWOBJkGam7otiM3qzUxxv2NIni_4lVv--bJ0pp8/viewform?edit_requested=true&fbclid=PAZXh0bgNhZW0CMTEAAabHVGDCMnxLjOucKtWRspSpbwxGQzwRouuw9b823EjqfgSmvaK2Luh7l90_aem_XG-i-CF2rzD7FJOwOUBroQ"
            target="_blank"
            className="text-blue-700"
          >
            [링크]
          </a>
          에서 지원서를 작성해주세요.
        </p>
        <p>
          함께 노래하며 연세의 아름다운 하모니를 만들어갈 당신을 기다립니다!
          지금 도전하세요!
        </p>
      </div>
    </div>
  );
}
