"use client";
import React, { useState } from "react";
import {
  Check,
  Copy,
  Download,
  FileText,
  ArrowUpRight,
} from "lucide-react";
import PageHeader from "@/app/_component/PageHeader";
import { cn } from "@/lib/utils";

const ACCOUNT = "1005-503-424140";

const steps = [
  {
    title: "후원금액 선정",
    body: "합창단에 후원하고자 하는 금액을 정합니다.",
  },
  {
    title: "후원신청서 작성",
    body: "아래 ‘후원신청서 내려받기’ 버튼으로 신청서를 받아 개인 정보를 작성합니다.",
  },
  {
    title: "입금 방법 안내",
    body: "문자 및 전화를 통해 후원금 입금 방법(자동이체)을 안내해 드립니다.",
  },
  {
    title: "후원금 입금",
    body: "은행 방문(신분증 지참, ‘자동이체 서비스’ 문의) 또는 인터넷·모바일뱅킹의 자동이체 메뉴에서 등록합니다.",
  },
];

const tiers = [
  { member: "스벨링크", en: "Sweelinck", amount: "2만원", benefit: "정기연주회 A석 2매" },
  { member: "바흐", en: "Bach", amount: "3만원", benefit: "정기연주회 S석 2매" },
  { member: "모차르트", en: "Mozart", amount: "5만원", benefit: "정기연주회 S석 4매" },
  { member: "브람스", en: "Brahms", amount: "10만원 이상", benefit: "정기연주회 R석 4매" },
];
const commonBenefits = [
  "프로그램북 2부 제공",
  "프로그램북 회원명단 게재",
  "티켓 구매 시 30% 할인",
];

const taxBenefits = [
  "일정 금액 이상의 후원자분께 샹떼 자 듀 합창단 연주회 관람 특전을 제공해 드립니다.",
  "샹떼 자 듀 합창단에 소중한 나눔을 실천해 주시는 모든 분들께 세제혜택이 주어집니다.",
  "연말정산 소득공제를 받으실 수 있도록 기부금 영수증 발급이 가능합니다.",
  "기부금 영수증은 ‘국세청 홈택스’ 홈페이지에서 편리하게 발급받으실 수 있습니다.",
];

const reportYears = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018];

const agencies = [
  {
    name: "국세청",
    img: "/tax.png",
    href: "https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=135744&cntntsId=109155",
  },
  {
    name: "교육부",
    img: "/education.png",
    href: "https://www.moe.go.kr/sub/infoRenewal.do?m=010302&page=010302&gubun=N&s=moe",
  },
  { name: "국민권익위원회", img: "/right.png", href: "https://www.acrc.go.kr/" },
];

function SectionTitle({ en, kr }: { en: string; kr: string }) {
  return (
    <div>
      <span className="eyebrow">{en}</span>
      <h2 className="mt-4 font-serif text-2xl font-medium tracking-tight md:text-3xl">
        {kr}
      </h2>
    </div>
  );
}

export default function page() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(ACCOUNT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <>
      <PageHeader
        eyebrow="Support"
        title="후원 안내"
        description="하나님의 신실하심과 아름다우심을 온 세상에 전하는 사역에 지금 동참하실 수 있습니다."
      />

      <div className="container-page space-y-24 py-14 md:space-y-32 md:py-20">
        {/* 소개 + 계좌 */}
        <section className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="prose-kr lg:col-span-7">
            <p className="!text-foreground font-serif text-xl leading-[1.8] md:text-2xl">
              교회음악의 소중한 유산을 국내외에 알리는 사역, 찬양을 통하여
              소외되고 연약한 자들이 힘과 위로를 얻는 사역.
            </p>
            <p>
              죽었던 영혼이 다시 살아나는 기적적인 일들은 저희들의 열정뿐 아니라
              여러 귀한 손길이 많이 필요한 일입니다. 이 귀한 사역에 기도로 함께
              동참해 주시고 격려해 주시길 바랍니다. 또한 아낌없는 지원을 간절히
              부탁드립니다.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-sm bg-navy p-8 text-white md:p-10">
              <div className="pointer-events-none absolute -right-8 -top-10 font-display text-[12rem] leading-none text-white/[0.05]">
                ♪
              </div>
              <p className="font-display text-sm uppercase tracking-[0.25em] text-gold-light">
                후원 계좌
              </p>
              <p className="mt-6 text-sm text-white/60">우리은행</p>
              <p className="mt-1 font-display text-3xl tracking-wide md:text-4xl">
                {ACCOUNT}
              </p>
              <p className="mt-2 text-sm text-white/70">
                예금주 · 사단법인샹떼자듀합창단
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={copy}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-gold-pale"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" /> 복사됨
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" /> 계좌번호 복사
                    </>
                  )}
                </button>
                <a
                  href="/후원신청서.hwp"
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-white/10"
                >
                  <Download className="h-4 w-4" /> 후원신청서 내려받기
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 절차 */}
        <section>
          <SectionTitle en="How to Support" kr="후원 절차" />
          <ol className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border/70 bg-border/70 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="bg-card p-7">
                <span className="font-display text-4xl text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-medium">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* 예우 */}
        <section>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionTitle en="Membership" kr="후원자 예우" />
            <p className="text-sm text-muted-foreground">월 정기후원 기준</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {tiers.map((t, i) => (
              <div
                key={t.member}
                className={cn(
                  "flex flex-col rounded-sm border bg-card p-7 transition-shadow duration-300 hover:shadow-[0_24px_48px_-28px_rgba(14,22,36,0.4)]",
                  i === tiers.length - 1
                    ? "border-burgundy/40 bg-gradient-to-b from-burgundy/[0.06] to-card"
                    : "border-border/70"
                )}
              >
                <p className="font-display text-lg italic text-gold">{t.en}</p>
                <h3 className="mt-1 font-serif text-xl">{t.member} 회원</h3>
                <p className="mt-6">
                  <span className="text-sm text-muted-foreground">월 </span>
                  <span className="font-serif text-3xl font-medium tracking-tight">
                    {t.amount}
                  </span>
                </p>
                <p className="mt-4 rounded-sm bg-muted px-3 py-2 text-sm font-medium">
                  {t.benefit}
                </p>
                <ul className="mt-6 space-y-2 border-t border-border/70 pt-6 text-sm text-muted-foreground">
                  {commonBenefits.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-col justify-between gap-2 rounded-sm border border-dashed border-border p-7 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-serif text-lg">광고 후원</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                프로그램북에 광고를 게재하여 후원하실 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 세제혜택 + 명세서 */}
        <section className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionTitle en="Tax Benefits" kr="후원자 세제혜택" />
            <ul className="mt-8 space-y-4">
              {taxBenefits.map((b) => (
                <li key={b} className="flex gap-3 leading-relaxed text-foreground/80">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionTitle en="Transparency" kr="후원금 사용내역" />
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              사단법인 샹떼자듀합창단은 「법인세법 시행령」 제38조제8항 또는
              제39조제5항에 따라 연간 기부금 모금액 및 활용실적 명세서를
              공개합니다.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {reportYears.map((y) => (
                <a
                  key={y}
                  href={`/연간기부금모금액및활용실적명세서(${y}년도).pdf`}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-sm border border-border/70 bg-card px-4 py-3 text-sm transition-colors hover:border-navy hover:text-navy"
                >
                  <span className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground group-hover:text-navy" />
                    {y}
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-40 group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 공익제보 */}
        <section className="rounded-sm bg-muted/70 p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <SectionTitle en="Whistleblowing" kr="공익제보" />
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                사단법인 샹떼자듀합창단은 ‘공익법인의 설립ㆍ운영에 관한 법률’에
                따른 공익법인으로서 관련 법령과 규정을 준수하며, 이사들은
                합창단의 공정하고 투명한 운영을 위해 노력하고 있습니다. 합창단과
                관련된 탈세, 비위 사실 등을 알고 계시면 아래 기관에 제보하실 수
                있습니다.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:col-span-6 lg:self-end">
              {agencies.map((a) => (
                <a
                  key={a.name}
                  href={a.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-20 items-center justify-center rounded-sm border border-border/70 bg-white px-4 transition-shadow hover:shadow-md"
                  aria-label={a.name}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={a.img} alt={a.name} className="max-h-10 w-auto" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
