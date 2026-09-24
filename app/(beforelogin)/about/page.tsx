import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-7">
        <p className="font-serif text-2xl leading-[1.7] tracking-tight md:text-[1.75rem]">
          “주님을 찬양하라”는 뜻의 샹떼 자 듀(Chantez à Dieu)는 합창음악에
          열정을 가진 음악인들이 모인 전문합창단입니다.
        </p>
        <div className="mt-10 h-px w-16 bg-gold" />
        <div className="prose-kr mt-10">
          <p>
            샹떼 자 듀(Chantez à Dieu)는 교회음악가이자 지휘자인 김혜옥
            연세대학교 은퇴교수를 중심으로 합창음악에 열정을 가진 음악인들이 모인
            전문합창단입니다.
          </p>
          <p>
            성악, 기악, 작곡, 합창지휘 등 다양한 음악적 배경을 지닌 젊은이들이
            모여 르네상스, 바로크, 고전, 낭만시대의 작품들을 연구하고 토론하여
            콘서트로 선보이는 문화예술단체이기도 합니다. 샹떼 자 듀는 교회음악
            이외에도 현대음악과 창작곡들, 무반주 민요 합창에도 관심을 갖고
            있으며, 여러 시대의 다양한 레퍼토리를 연주하고자 노력하고 있습니다.
          </p>
          <p>
            특히 합창단원과 솔로이스트들이 오래된 음악의 금자탑들을 생생한
            현장으로 이끌어 냄으로써 청중들과 연주자들의 능동적인 만남을
            시도합니다. 연주회장뿐만 아니라 각 교회, 시민회관 등 지역사회의
            곳곳에서 아름다운 음악을 소개하고 있으며, 국내외 연주자 초청
            프로그램, 아카데미, 합창캠프 등과 같은 음악 콘텐츠를 기획하고
            있습니다.
          </p>
          <p>
            샹떼 자 듀는 앞으로 전 세계의 거장들과 깊이 있게 교감할 수 있는 협연
            및 공동 프로젝트를 준비하고 있으며, 한국뿐만 아니라 글로벌 사회와의
            공통의 코드를 만들어 나갈 것입니다. 무엇보다 찬양을 통하여 하나님의
            이름을 높여드리는 귀한 합창단이 되기를 소망합니다. 여러분의 많은
            관심과 후원을 부탁드리겠습니다.
          </p>
        </div>
      </div>
      <aside className="space-y-6 lg:col-span-5">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm lg:sticky lg:top-40">
          <Image
            src="/in02.jpg"
            alt="연주 중인 샹떼 자 듀 합창단"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
      </aside>
      <figure className="overflow-hidden rounded-sm border border-border/70 bg-card lg:col-span-12">
        <Image
          width={1175}
          height={566}
          alt="시편 96편 1-2절"
          src="/about01.png"
          className="h-auto w-full"
        />
      </figure>
    </div>
  );
}
