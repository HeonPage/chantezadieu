"use client";
import React from "react";
import Breadcrumb from "@/app/_component/Breadcrumb";

export default function page() {
  return (
    <div className="flex flex-col gap-6 ">
      <Breadcrumb
        title={"후원 안내"}
        description="Chantez a dieu"
        link_url="/sponser"
      />
      <div className="text-sm">
        <div className="bg-white border rounded-lg p-6 mb-8">
          <p className="text-slate-700 leading-relaxed mb-4">
            하나님의 신실하심과 아름다우심을 온 세상에 전하는 사역에 지금
            동참하실 수 있습니다.
          </p>
          <p className=" leading-relaxed mb-4">
            교회음악의 소중한 유산을 국내외에 알리는 사역 찬양을 통하여 소외되고
            연약한 자들이 힘과 위로를 얻는 사역 죽었던 영혼이 다시 살아는
            기적적인 일들은 저희들의 열정 뿐 아니라 여러 귀한 손길이 많이 필요한
            일입니다.
          </p>
          <p className="text-base leading-relaxed mb-6">
            이 귀한 사역에 기도로 함께 동참해주시고 격려해주시길 바랍니다. 또한
            아낌없는 지원을 간절히 부탁드립니다.
          </p>

          {[
            "후원금액 선정",
            "후원신청서 작성",
            "후원금 입금안내",
            "후원금 입금",
          ].map((step, index) => (
            <div key={index} className="mb-6">
              <div className="flex items-center mb-2">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-600">
                  Step {String(index + 1).padStart(2, "0")} {step}
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
              <ul className="list-disc pl-5">
                {index === 0 && (
                  <li>합창단에 후원하고자 하는 금액을 정합니다.</li>
                )}
                {index === 1 && (
                  <li>
                    페이지 하단에{" "}
                    <span className="text-blue-600">"후원신청서 작성"</span>{" "}
                    버튼을 눌러 개인이력을 작성합니다.
                  </li>
                )}
                {index === 2 && (
                  <li>
                    문자 및 전화를 통하여{" "}
                    <span className="text-blue-600">"Step 04 후원금 입금"</span>{" "}
                    방법(자동이체)와 관련된 안내를 해드립니다.
                  </li>
                )}
                {index === 3 && (
                  <>
                    <li>후원하고자 하는 금액을 입금합니다.</li>
                    <ul className="list-none pl-5 mt-2">
                      <li className="mb-1">(은행방문시)</li>
                      <li className="mb-1">
                        출금계좌 본인이 직접 방문 → 신분증 지참 → 은행원에
                        "자동이체 서비스 문의"
                      </li>
                      <li className="mb-1">(인터넷/모바일뱅킹 이용시)</li>
                      <li className="mb-1">
                        공인인증서 로그인 → 이체메뉴 → 자동이체 등록
                      </li>
                      <li className="mb-1">후원계좌</li>
                      <li>사단법인샹떼자듀합창단 / 우리은행 1005-503-424140</li>
                    </ul>
                  </>
                )}
              </ul>
            </div>
          ))}

          <h3 className="text-2xl font-semibold mb-4">후원자 예우안내</h3>
          <div className="overflow-x-auto">
            <div className="block lg:hidden">
              {/* 모바일 뷰 */}
              {[
                {
                  member: "스벨링크 회원",
                  amount: "월 2만원",
                  benefit: "정기연주회 A석 2매",
                },
                {
                  member: "바 흐 회원",
                  amount: "월 3만원",
                  benefit: "정기연주회 S석 2매",
                },
                {
                  member: "모차르트 회원",
                  amount: "월 5만원",
                  benefit: "정기연주회 S석 4매",
                },
                {
                  member: "브 람 스 회원",
                  amount: "월 10만원 이상",
                  benefit: "정기연주회 R석 4매",
                },
              ].map((row, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm mb-4 p-4"
                >
                  <div className="font-medium text-gray-900 mb-2">
                    {row.member}
                  </div>
                  <div className="text-gray-600 text-sm mb-1">{row.amount}</div>
                  <div className="text-gray-600 text-sm">{row.benefit}</div>
                  {index === 0 && (
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <ul className="list-disc pl-5 text-sm text-gray-600">
                        <li>프로그램북 2부 제공</li>
                        <li>프로그램북 회원명단 게재</li>
                        <li>티켓구매시 30% 할인</li>
                      </ul>
                    </div>
                  )}
                </div>
              ))}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="font-medium text-gray-900 mb-2">광고 후원</div>
                <div className="text-gray-600 text-sm">
                  프로그램북에 광고를 게재하여 후원하실 분
                </div>
              </div>
            </div>

            {/* 데스크톱 뷰 */}
            <table className="w-full text-sm text-left text-gray-500 hidden lg:table">
              <tbody>
                {[
                  {
                    member: "스벨링크 회원",
                    amount: "월 2만원",
                    benefit: "정기연주회 A석 2매",
                  },
                  {
                    member: "바 흐 회원",
                    amount: "월 3만원",
                    benefit: "정기연주회 S석 2매",
                  },
                  {
                    member: "모차르트 회원",
                    amount: "월 5만원",
                    benefit: "정기연주회 S석 4매",
                  },
                  {
                    member: "브 람 스 회원",
                    amount: "월 10만원 이상",
                    benefit: "정기연주회 R석 4매",
                  },
                ].map((row, index) => (
                  <tr key={index} className="bg-white border-b">
                    <td className="px-6 py-4">{row.member}</td>
                    <td className="px-6 py-4">{row.amount}</td>
                    <td className="px-6 py-4">{row.benefit}</td>
                    {index === 0 && (
                      <td rowSpan={4} className="px-6 py-4">
                        <ul className="list-disc pl-5">
                          <li>프로그램북 2부 제공</li>
                          <li>프로그램북 회원명단 게재</li>
                          <li>티켓구매시 30% 할인</li>
                        </ul>
                      </td>
                    )}
                  </tr>
                ))}
                <tr className="bg-white border-b">
                  <td className="px-6 py-4">광 고 후원</td>
                  <td colSpan={3} className="px-6 py-4">
                    프로그램북에 광고를 게재하여 후원하실 분
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold my-6">후원자 세제혜택</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              일정 금액 이상의 후원자분께 샹떼 자 듀 합창단 연주회 관람 특전을
              제공해드립니다.
            </li>
            <li>
              샹떼 자 듀 합창단에 소중한 나눔을 실천해주시는 모든 분들께
              세제혜택이 주어집니다.
            </li>
            <li>
              연말정산 소득공제를 받으실 수 있도록 기부금 영수증 발급이
              가능합니다.
            </li>
            <li>
              상기부금 영수증은 "국세청홈택스" 홈페이지에서 편리하게 발급받으실
              수 있습니다.
            </li>
          </ul>

          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
            onClick={() => window.open("후원신청서.hwp")}
          >
            후원하기
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">후원금 사용내역</h3>
          <p className=" leading-relaxed mb-4">
            사단법인 샹떼자듀합창단은 「법인세법 시행규칙 제18조의 2제1항」에
            따라 연간 기부금 모금액 활용실적 명세서를 공개합니다.
          </p>
          <ul className="space-y-2">
            {[2023, 2022, 2021, 2020, 2019, 2018].map((year) => (
              <li key={year}>
                <a
                  href={`./연간기부금모금액및활용실적명세서${
                    year === 2023 ? "2023" : `(${year}년도)`
                  }.pdf`}
                  className="text-blue-600 hover:underline"
                >
                  {year}년 연간 기부금 모금액 및 활용실적 명세서
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
