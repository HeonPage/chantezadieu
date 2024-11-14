import React from "react";
import Breadcrumb from "@/app/_component/Breadcrumb";
import { cn } from "@/lib/utils";
import { IProfile } from "@/types/IProfile";
import Image from "next/image";
export default async function page() {
  return (
    <>
      <div>
        <div className="flex flex-col gap-6 ">
          <Breadcrumb
            title={"음악감독 인사말"}
            description="Chantez a dieu"
            link_url="/about/director"
          />
          <div className="mx-auto">
            <div color="transparent" className="flex flex-col gap-6">
              <div className="flex flex-row mobile-size:flex-col w-full mobile-size:gap-6 tablet-size:gap-12 desktop-size:gap-16 h-full justify-between ">
                <Image
                  alt={"prof"}
                  src="/about/dir_kr.png"
                  width={1500}
                  height={800}
                />
              </div>
              <div className="w-full">
                <div className="mb-3 w-full leading-relaxed flex flex-col gap-6">
                  <p>
                    샹떼자듀(Chantez à Dieu)는 단순히 노래가 좋아서 모인
                    음악인들의 모임이 아닌, 기독교적 정체성을 갖고 음악과 예술로
                    전세계인들을 위해 봉사하는 전문 연주단체가 되기를 소망하며
                    시작 되었습니다.
                  </p>
                  <p>
                    저희는 정기적 모임때마다 가장먼저 함께 말씀을 읽고 묵상하며
                    하나님의 음성을 듣고 그분의 뜻에 순종하기를 다짐하며 마음과
                    소리를 모아 합창연습을 시작하곤 합니다. 그러하기에 저희가
                    부르는 가사에 더욱 정성을 드리고, 그 메세지가 전달되도록
                    집중하곤 합니다.
                  </p>
                  <p>
                    이런 훈련을 통하여 찬양을 통한 선교적 마인드를 키워가고
                    공유하며 함께 힘을 모으고 있습니다. 말씀이 선포되며
                    찬양하는것이 하나님을 높이며 그분을 기쁘시게 하는 것이라고
                    확신하기 때문입니다. 저는 샹떼 자듀(Chantez à Dieu)가
                    한국뿐만 아니라 여러 다른 국가에서도 음악을 통한 만남과
                    소통을 주도하는 문화 사절로 활동하기를 기대합니다. 이 귀한
                    발걸음에는 음악인들 뿐만 아니라 음악을 사랑하시는 많은
                    분들이 힘을 보태고 마음을 전달해 주실 수 있습니다.
                  </p>
                  <p>
                    예부터 음악인들은 많은 후원자들과 애호가들의 사랑과 정성
                    덕분에 클 수 있었습니다. 바하,모차르트, 베토벤이 그러했고
                    많은 오늘날 한국을 대표하는 음악인재들이 또한 그러합니다.
                    샹떼자 듀의 찬양을 통하여 소외되고 연약한 자들이 힘과
                    위로를얻고, 죽었던 영혼이 다시 살아나는 기적적인 일들이
                    경험되어지길 꿈꿔봅니다.
                  </p>
                  <p>
                    그러나 이 모든일이 저희들의 열정만으로는 할수 없음을
                    고백하게 됩니다. 여러 귀한 손길이 그 만큼 많이 필요한 일이기
                    때문입니다. 음악을 사랑하시는 분들과 음악인들이 함께
                    힘을모아 이러한 귀한 사역을 할 수 있음에 저는 날마다
                    가슴벅차며 감사하게 됩니다. 샹떼 자 듀는 이 귀한 사역에
                    온전히 순종하며 겸손히 감당해 나아가고자 합니다.
                  </p>
                  <p>
                    많은 분들이 기도로 함께 동참해주시고 격려해주시길
                    바라겠습니다. 또한 아낌없는 지원을 해 주시길 간절히
                    부탁드립니다.
                  </p>
                </div>
              </div>
              <div
                className={cn(
                  "justify-end flex w-full leading-relaxed font-extrabold text-3xl"
                )}
              >
                <Image
                  alt={"prof"}
                  src="/signature.png"
                  width={200}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
