import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import ConcertCard from "./concert/_component/ConcertCard";
import { sortedConcerts } from "./concert/_lib/getConcert";

const repertoire = ["Renaissance", "Baroque", "Classical", "Romantic", "Contemporary"];

export default function Page() {
  const latest = sortedConcerts().slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative -mt-[var(--header-h)] flex min-h-[100svh] items-end overflow-hidden bg-navy-ink text-white">
        <Image
          src="/home-bg.jpg"
          alt="무대 위의 샹떼 자 듀 합창단"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-ink/80 via-navy-ink/25 to-navy-ink/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-ink/70 via-navy-ink/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(14,22,36,0.55)_100%)]" />

        <div className="container-page relative pb-20 pt-40 md:pb-28">
          <span className="eyebrow animate-fade-up font-sans text-xs normal-case tracking-[0.2em] text-gold-light">
            사단법인 샹떼 자 듀 합창단
          </span>
          <h1 className="mt-6 animate-fade-up font-display text-[3.25rem] font-medium leading-[0.95] tracking-tight [animation-delay:120ms] sm:text-7xl lg:text-[6.5rem]">
            Chœur
            <br />
            <span className="italic">Chantez à Dieu</span>
          </h1>
          <p className="mt-8 max-w-xl animate-fade-up text-base leading-relaxed text-white/80 [animation-delay:240ms] md:text-lg">
            “주님을 찬양하라.” 르네상스부터 현대에 이르는 합창 음악으로
            하나님의 이름을 높이는 전문 합창단입니다.
          </p>
          <div className="mt-10 flex animate-fade-up flex-wrap gap-3 [animation-delay:360ms]">
            <Link
              href="/concert"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-navy-ink transition-colors hover:bg-gold-pale"
            >
              연주회 보기 <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-medium transition-colors hover:border-white hover:bg-white/10"
            >
              합창단 소개
            </Link>
          </div>
        </div>

        <a
          href="#intro"
          aria-label="아래로 스크롤"
          className="absolute bottom-6 right-5 hidden items-center gap-2 font-display text-xs uppercase tracking-[0.3em] text-white/60 transition-colors hover:text-white md:right-8 md:flex"
        >
          Scroll <ChevronDown className="h-4 w-4 animate-bounce" />
        </a>
      </section>

      {/* INTRO */}
      <section id="intro" className="scroll-mt-[var(--header-h)] py-24 md:py-32">
        <div className="container-page grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="relative lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/in01.jpg"
                alt="지휘하는 김혜옥 음악감독"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[60%_center]"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 hidden w-44 overflow-hidden rounded-sm border-[6px] border-background shadow-xl sm:block md:w-56">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/about/IMG_5373.jpg"
                  alt="악보"
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <span className="eyebrow">About the Choir</span>
            <h2 className="mt-6 font-serif text-3xl font-medium leading-snug tracking-tight md:text-[2.5rem] md:leading-[1.3]">
              음악의 금자탑을
              <br />
              생생한 찬양의 현장으로
            </h2>
            <div className="prose-kr mt-8">
              <p>
                샹떼 자 듀(Chantez à Dieu)는 교회음악가이자 지휘자인 김혜옥
                연세대학교 은퇴교수를 중심으로 합창음악에 열정을 가진
                음악인들이 모인 전문합창단입니다.
              </p>
              <p>
                성악, 기악, 작곡, 합창지휘 등 다양한 배경의 음악인들이 여러
                시대의 작품을 연구하고 토론하여 콘서트로 선보이며, 청중과
                연주자가 능동적으로 만나는 무대를 만들어 갑니다.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-display text-lg italic text-muted-foreground">
              {repertoire.map((r, i) => (
                <li key={r} className="flex items-center gap-5">
                  {r}
                  {i < repertoire.length - 1 && (
                    <span className="h-1 w-1 rounded-full bg-gold" />
                  )}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="group mt-10 inline-flex items-center gap-3 text-sm font-medium text-primary"
            >
              <span className="link-underline">합창단 이야기 더 보기</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* SCRIPTURE */}
      <section className="relative overflow-hidden bg-navy py-24 text-white md:py-28">
        <div className="pointer-events-none absolute -left-10 top-1/2 -translate-y-1/2 select-none font-display text-[18rem] leading-none text-white/[0.04] md:text-[26rem]">
          “
        </div>
        <div className="container-page relative text-center">
          <p className="mx-auto max-w-3xl font-serif text-xl leading-[1.9] md:text-[1.7rem] md:leading-[1.8]">
            새 노래로 여호와께 노래하라
            <br />
            온 땅이여 여호와께 노래할지어다
            <br />
            여호와께 노래하여 그의 이름을 송축하며
            <br />
            그의 구원을 날마다 전파할지어다
          </p>
          <div className="mx-auto mt-10 flex items-center justify-center gap-4 text-sm tracking-[0.2em] text-gold-light">
            <span className="h-px w-10 bg-gold/60" />
            시편 96편 1–2절
            <span className="h-px w-10 bg-gold/60" />
          </div>
        </div>
      </section>

      {/* CONCERTS */}
      <section className="py-24 md:py-32">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow">Concerts</span>
              <h2 className="mt-5 font-serif text-3xl font-medium tracking-tight md:text-[2.5rem]">
                최근 연주회
              </h2>
            </div>
            <Link
              href="/concert"
              className="group inline-flex items-center gap-3 text-sm font-medium text-primary"
            >
              <span className="link-underline">전체 연주 기록</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 md:gap-x-8">
            {latest.map((concert, i) => (
              <ConcertCard
                key={concert.id}
                concert={concert}
                className={i === 2 ? "hidden md:block" : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT CTA */}
      <section className="pb-24 md:pb-32">
        <div className="container-page">
          <div className="grid overflow-hidden rounded-sm bg-burgundy text-white md:grid-cols-5">
            <div className="flex flex-col justify-center p-10 md:col-span-3 md:p-16">
              <span className="eyebrow text-gold-light">Support</span>
              <h2 className="mt-6 font-serif text-3xl font-medium leading-snug md:text-4xl">
                찬양의 사역에
                <br />
                함께해 주세요
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-white/75">
                교회음악의 소중한 유산을 국내외에 알리고, 찬양을 통해 소외되고
                연약한 이들에게 위로를 전하는 일에 여러분의 손길이 필요합니다.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/sponser"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-burgundy transition-colors hover:bg-gold-pale"
                >
                  후원 안내 <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative min-h-[260px] md:col-span-2">
              <Image
                src="/in04.jpg"
                alt="스테인드글라스"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy/60 to-transparent md:bg-gradient-to-r" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
