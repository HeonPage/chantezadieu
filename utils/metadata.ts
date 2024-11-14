export function webSiteMetadata(subtitle: string) {
  return {
    metadataBase: new URL("https://www.chantezadieu.com"),
    title: `Chantez à Dieu 합창단`,
    description:
      "Chœur Chantez à Dieu “주님을 찬양하라”는 뜻인 샹떼 자 듀(Chantez à Dieu)는 교회음악가이자 지휘자인 김혜옥 연세대학교 은퇴교수를 중심으로 합창음악에 열정을 가진 음악인들이 모인 전문합창단 입니다.",
    keywords: "샹떼 자 듀, 샹떼 자 듀 합창단, 합창단, Chantez a dieu, 김혜옥",
    authors: [{ name: "샹떼 자 듀 합창단" }],
    category: "Music",
    openGraph: {
      title: "Chantez à Dieu",
      description: "",
      type: "website",
      url: "https://www.chantezadieu.com",
      images: [
        {
          url: "https://www.chantezadieu.com/opengraph-image.png",
          width: 1000,
          height: 1000,
          alt: "Chantez à Dieu",
        },
      ],
      siteName: "샹떼 자 듀 합창단",
    },
    other: {
      "og:locale": "ko_KR",
      "og:event:start_time": "2024-12-01T17:00:00+09:00",
    },
  };
}
