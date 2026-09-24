import React from "react";
import Image from "next/image";

const letter = [
  "샹떼자듀(Chantez à Dieu)는 단순히 노래가 좋아서 모인 음악인들의 모임이 아닌, 기독교적 정체성을 갖고 음악과 예술로 전 세계인들을 위해 봉사하는 전문 연주단체가 되기를 소망하며 시작되었습니다.",
  "저희는 정기적 모임 때마다 가장 먼저 함께 말씀을 읽고 묵상하며 하나님의 음성을 듣고 그분의 뜻에 순종하기를 다짐하며 마음과 소리를 모아 합창연습을 시작하곤 합니다. 그러하기에 저희가 부르는 가사에 더욱 정성을 드리고, 그 메시지가 전달되도록 집중하곤 합니다.",
  "이런 훈련을 통하여 찬양을 통한 선교적 마인드를 키워가고 공유하며 함께 힘을 모으고 있습니다. 말씀이 선포되며 찬양하는 것이 하나님을 높이며 그분을 기쁘시게 하는 것이라고 확신하기 때문입니다. 저는 샹떼 자 듀(Chantez à Dieu)가 한국뿐만 아니라 여러 다른 국가에서도 음악을 통한 만남과 소통을 주도하는 문화 사절로 활동하기를 기대합니다. 이 귀한 발걸음에는 음악인들뿐만 아니라 음악을 사랑하시는 많은 분들이 힘을 보태고 마음을 전달해 주실 수 있습니다.",
  "예부터 음악인들은 많은 후원자들과 애호가들의 사랑과 정성 덕분에 클 수 있었습니다. 바흐, 모차르트, 베토벤이 그러했고 오늘날 한국을 대표하는 많은 음악 인재들 또한 그러합니다. 샹떼 자 듀의 찬양을 통하여 소외되고 연약한 자들이 힘과 위로를 얻고, 죽었던 영혼이 다시 살아나는 기적적인 일들이 경험되어지길 꿈꿔 봅니다.",
  "그러나 이 모든 일이 저희들의 열정만으로는 할 수 없음을 고백하게 됩니다. 여러 귀한 손길이 그만큼 많이 필요한 일이기 때문입니다. 음악을 사랑하시는 분들과 음악인들이 함께 힘을 모아 이러한 귀한 사역을 할 수 있음에 저는 날마다 가슴 벅차며 감사하게 됩니다. 샹떼 자 듀는 이 귀한 사역에 온전히 순종하며 겸손히 감당해 나아가고자 합니다.",
  "많은 분들이 기도로 함께 동참해 주시고 격려해 주시길 바라겠습니다. 또한 아낌없는 지원을 해 주시길 간절히 부탁드립니다.",
];

export default function page() {
  return (
    <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
      <aside className="lg:col-span-4">
        <div className="lg:sticky lg:top-40">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
            <Image
              src="/in01.jpg"
              alt="김혜옥 음악감독"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover object-[62%_center]"
            />
          </div>
          <div className="mt-6">
            <p className="font-display text-sm italic text-gold">
              Music Director
            </p>
            <p className="mt-1 font-serif text-2xl">김혜옥</p>
            <p className="mt-1 text-sm text-muted-foreground">
              샹떼 자 듀 합창단 음악감독 · 연세대학교 은퇴교수
            </p>
          </div>
        </div>
      </aside>
      <article className="lg:col-span-8">
        <blockquote className="border-l-2 border-gold pl-6 font-serif text-2xl leading-[1.6] tracking-tight md:text-[1.75rem]">
          “하나님의 신비한 사랑의 세계를 찬양하는 샹떼 자 듀를 찾아주셔서
          감사합니다.”
        </blockquote>
        <div className="prose-kr mt-12">
          {letter.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-12 flex items-center justify-end gap-4 border-t border-border/70 pt-8">
          <span className="text-sm text-muted-foreground">음악감독</span>
          <Image
            alt="김혜옥 서명"
            src="/signature.png"
            width={199}
            height={71}
            className="h-12 w-auto"
          />
        </div>
      </article>
    </div>
  );
}
