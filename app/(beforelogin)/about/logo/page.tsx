import React from "react";
import Image from "next/image";

const colors = [
  { name: "Chantez Blue", hex: "#003378", className: "bg-navy" },
  { name: "Chantez Red", hex: "#75222D", className: "bg-burgundy" },
  { name: "Chantez Gold", hex: "#AA9652", className: "bg-gold" },
];

export default async function page() {
  return (
    <div className="space-y-16">
      <div className="grid gap-6 md:grid-cols-2">
        {[
          { src: "/logo.png", label: "심볼 마크" },
          { src: "/logo2.png", label: "시그니처" },
        ].map((l) => (
          <figure key={l.src}>
            <div className="flex aspect-[16/9] items-center justify-center rounded-sm border border-border/70 bg-white p-8">
              <Image
                alt={l.label}
                src={l.src}
                width={1175}
                height={500}
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 text-sm text-muted-foreground">
              {l.label}
            </figcaption>
          </figure>
        ))}
      </div>
      <section>
        <span className="eyebrow">Color</span>
        <h2 className="mt-4 font-serif text-2xl">전용 색상</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {colors.map((c) => (
            <div
              key={c.hex}
              className="overflow-hidden rounded-sm border border-border/70 bg-card"
            >
              <div className={`h-32 ${c.className}`} />
              <div className="flex items-baseline justify-between p-4">
                <span className="font-display text-lg">{c.name}</span>
                <span className="font-mono text-xs text-muted-foreground">
                  {c.hex}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
