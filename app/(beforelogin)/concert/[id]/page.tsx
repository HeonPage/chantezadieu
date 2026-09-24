import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import { ArrowLeft, CalendarDays, MapPin } from "lucide-react";
import { concertList, getConcert } from "../_lib/getConcert";
import ConcertPoster from "../_component/ConcertPoster";
import PhotoGallery from "../_component/PhotoGallery";

type Props = {
  params: { id: string };
};

const toList = (v?: string | string[]) =>
  v ? (Array.isArray(v) ? v.join(", ") : v) : undefined;

const youtubeId = (url: string) => {
  const m = url.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{6,})/);
  return m ? m[1] : url.split("v=")[1];
};

export function generateStaticParams() {
  return concertList.map((c) => ({ id: String(c.id) }));
}

export default async function Page({ params }: Props) {
  const concert = await getConcert(params.id);
  if (!concert) notFound();

  // 포스터가 있는 폴더의 사진 목록
  let images: string[] = [];
  const folder = path.dirname(concert.img_url).replace(/^\//, "");
  const publicFolderPath = path.join(process.cwd(), "public", folder);
  try {
    if (fs.existsSync(publicFolderPath)) {
      images = fs
        .readdirSync(publicFolderPath)
        .filter((file) => /\.(jpe?g|png|gif|webp)$/i.test(file))
        .sort()
        .map((file) => `/${folder}/${file}`)
        .filter((src) => src !== concert.img_url);
    }
  } catch (error) {
    console.error("이미지 로딩 중 에러:", error);
  }

  const p = concert.performers;
  const performerRows = [
    ["지휘", p?.conductor],
    ["부지휘", p?.viceconductor],
    ["합창", toList(p?.choir)],
    ["오케스트라", toList(p?.orchestra)],
    ["피아노", toList(p?.piano)],
  ].filter(([, v]) => v) as [string, string][];
  const soloists = p?.soloists ? Object.entries(p.soloists) : [];
  const program = concert.program
    ? Object.entries(concert.program).filter(([, v]) => v && v.length)
    : [];
  const infoRows = [
    ["주최", toList(concert.organizer)],
    ["후원", toList(concert.sponsor)],
    ["예매", toList(concert.ticketing)],
  ].filter(([, v]) => v) as [string, string][];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-ink text-white">
        <Image
          src={concert.img_url}
          alt=""
          fill
          sizes="100vw"
          className="scale-110 object-cover opacity-40 blur-2xl"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-ink/60 to-navy-ink" />
        <div className="container-page relative grid gap-10 py-12 md:grid-cols-12 md:items-end md:py-20">
          <div className="md:col-span-4">
            <div className="mx-auto max-w-[280px] md:max-w-none">
              <ConcertPoster concert={concert} />
            </div>
          </div>
          <div className="md:col-span-8 md:pb-4">
            <Link
              href="/concert"
              className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> 연주회 목록
            </Link>
            <h1 className="mt-6 font-serif text-3xl font-medium leading-snug tracking-tight md:text-[2.75rem] md:leading-[1.25]">
              {concert.title}
            </h1>
            <div className="mt-8 flex flex-col gap-3 text-sm text-white/80 sm:flex-row sm:flex-wrap sm:gap-x-8">
              <span className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-gold-light" />
                {concert.date}
              </span>
              {concert.place && (
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gold-light" />
                  {concert.place}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="container-page py-14 md:py-20">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-14 lg:col-span-8">
            {concert.desc && (
              <section>
                <span className="eyebrow">Notes</span>
                <div className="mt-6 whitespace-pre-line leading-[1.95] text-foreground/80">
                  {concert.desc}
                </div>
              </section>
            )}

            {program.length > 0 && (
              <section>
                <span className="eyebrow">Program</span>
                <h2 className="mt-4 font-serif text-2xl">프로그램</h2>
                <div className="mt-8 space-y-10">
                  {program.map(([part, pieces], i) => (
                    <div key={part} className="grid gap-4 sm:grid-cols-[88px_1fr]">
                      <div className="font-display text-lg italic text-gold">
                        Part {i + 1}
                      </div>
                      <ol className="divide-y divide-border/70 border-y border-border/70">
                        {pieces!.map((piece, j) => (
                          <li key={j} className="py-3.5 leading-relaxed">
                            {piece}
                          </li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {concert.youtube_url && concert.youtube_url.length > 0 && (
              <section>
                <span className="eyebrow">Video</span>
                <h2 className="mt-4 font-serif text-2xl">공연 영상</h2>
                <div className="mt-8 space-y-6">
                  {concert.youtube_url.map((url) => (
                    <div
                      key={url}
                      className="aspect-video overflow-hidden rounded-sm bg-black"
                    >
                      <iframe
                        src={`https://www.youtube.com/embed/${youtubeId(url)}`}
                        title={`${concert.title} 공연 영상`}
                        className="h-full w-full"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {images.length > 0 && (
              <section>
                <span className="eyebrow">Gallery</span>
                <h2 className="mt-4 font-serif text-2xl">공연 사진</h2>
                <PhotoGallery images={images} concert={concert} />
              </section>
            )}
          </div>

          <aside className="lg:col-span-4">
            <div className="space-y-8 rounded-sm border border-border/70 bg-card p-7 lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
              {(performerRows.length > 0 || soloists.length > 0) && (
                <div>
                  <h3 className="font-display text-sm uppercase tracking-[0.25em] text-gold">
                    Performers
                  </h3>
                  <dl className="mt-5 space-y-3 text-sm">
                    {performerRows.map(([k, v]) => (
                      <div key={k} className="grid grid-cols-[84px_1fr] gap-3">
                        <dt className="text-muted-foreground">{k}</dt>
                        <dd>{v}</dd>
                      </div>
                    ))}
                  </dl>
                  {soloists.length > 0 && (
                    <>
                      <div className="my-5 h-px bg-border/70" />
                      <dl className="space-y-3 text-sm">
                        {soloists.map(([role, names]) => (
                          <div key={role} className="grid grid-cols-[84px_1fr] gap-3">
                            <dt className="text-muted-foreground">{role}</dt>
                            <dd>{toList(names)}</dd>
                          </div>
                        ))}
                      </dl>
                    </>
                  )}
                </div>
              )}
              {infoRows.length > 0 && (
                <div className="border-t border-border/70 pt-8">
                  <h3 className="font-display text-sm uppercase tracking-[0.25em] text-gold">
                    Information
                  </h3>
                  <dl className="mt-5 space-y-3 text-sm">
                    {infoRows.map(([k, v]) => (
                      <div key={k} className="grid grid-cols-[84px_1fr] gap-3">
                        <dt className="text-muted-foreground">{k}</dt>
                        <dd>{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
              <Link
                href="/sponser"
                className="flex w-full items-center justify-center rounded-full bg-burgundy py-3 text-sm font-medium text-white transition-colors hover:bg-burgundy-light"
              >
                후원으로 함께하기
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
