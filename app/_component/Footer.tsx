import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Youtube, ArrowUpRight } from "lucide-react";
import { navMenu, siteInfo } from "../_lib/navMenu";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-navy-ink text-white/70">
      <div className="container-page grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Image
            src="/logo3.png"
            width={364}
            height={97}
            alt="Chantez à Dieu"
            className="h-12 w-auto brightness-0 invert"
          />
          <p className="mt-6 max-w-sm font-display text-xl italic leading-snug text-white/85">
            “새 노래로 여호와께 노래하라,
            <br />온 땅이여 여호와께 노래할지어다.”
          </p>
          <p className="mt-2 text-xs tracking-wide text-gold-light">
            시편 96편 1절
          </p>
        </div>

        <div className="md:col-span-3">
          <h3 className="font-display text-sm uppercase tracking-[0.25em] text-gold-light">
            Menu
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navMenu.map((item) => (
              <li key={item.link_url}>
                <Link
                  href={item.link_url}
                  className="transition-colors hover:text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={siteInfo.youtube}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 transition-colors hover:text-white"
              >
                공연 영상 <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="font-display text-sm uppercase tracking-[0.25em] text-gold-light">
            Contact
          </h3>
          <dl className="mt-5 space-y-3 text-sm leading-relaxed">
            <div className="flex gap-4">
              <dt className="w-12 shrink-0 text-white/40">대표</dt>
              <dd>{siteInfo.representative}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-12 shrink-0 text-white/40">주소</dt>
              <dd>
                {siteInfo.address}
                <span className="mt-1 block text-xs text-white/40">
                  {siteInfo.addressEn}
                </span>
              </dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-12 shrink-0 text-white/40">전화</dt>
              <dd>
                <a href={siteInfo.telHref} className="hover:text-white">
                  {siteInfo.tel}
                </a>
              </dd>
            </div>
          </dl>
          <div className="mt-6 flex gap-2">
            <a
              href={siteInfo.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-gold hover:text-gold-light"
            >
              <Youtube className="h-4 w-4" />
            </a>
            <a
              href={siteInfo.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-gold hover:text-gold-light"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <span>
            © {currentYear} {siteInfo.legalName}. All rights reserved.
          </span>
          <Link href="/" className="font-display text-sm italic hover:text-white/70">
            www.chantezadieu.com
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
