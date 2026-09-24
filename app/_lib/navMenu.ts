import { aboutSidebar } from "../(beforelogin)/about/_lib/aboutSidebar";

export type NavItem = {
  title: string;
  en: string;
  link_url: string;
  sub?: { title: string; en: string; link_url: string }[];
};

export const navMenu: NavItem[] = [
  {
    title: "합창단 소개",
    en: "About",
    link_url: "/about",
    sub: aboutSidebar,
  },
  {
    title: "연주회",
    en: "Concerts",
    link_url: "/concert",
  },
  {
    title: "후원 안내",
    en: "Support",
    link_url: "/sponser",
  },
];

export const siteInfo = {
  nameKr: "샹떼 자 듀 합창단",
  nameEn: "Chœur Chantez à Dieu",
  legalName: "사단법인 샹떼 자 듀 합창단",
  representative: "김혜옥 (Kim Hae-Ock)",
  address: "서울특별시 용산구 독서당로 86, 402호",
  addressEn: "402, Dokseodang-ro 86, Yongsan-gu, Seoul, Republic of Korea",
  tel: "+82 10 6254 0502",
  telHref: "tel:+821062540502",
  youtube: "https://www.youtube.com/@choeurchantezadieu6139",
  instagram: "https://www.instagram.com/chantez_a_dieu/",
};
