import React from "react";
import Image from "next/image";

export default async function page() {
  return (
    <div className="mx-auto max-w-4xl">
      <figure className="rounded-sm border border-border/70 bg-white p-6 shadow-[0_24px_60px_-40px_rgba(14,22,36,0.35)] md:p-12">
        <Image
          alt="샹떼 자 듀 합창단 조직도"
          src="/organization.png"
          width={1083}
          height={871}
          className="h-auto w-full"
        />
      </figure>
    </div>
  );
}
