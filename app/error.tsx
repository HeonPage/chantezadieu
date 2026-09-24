"use client";
import Link from "next/link";
import Header from "./_component/Header";
import Footer from "./_component/Footer";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container-page flex flex-1 flex-col items-center justify-center py-32 text-center">
        <span className="eyebrow">Error</span>
        <h1 className="mt-6 font-serif text-3xl md:text-4xl">
          문제가 발생했습니다
        </h1>
        <p className="mt-4 text-muted-foreground">
          잠시 후 다시 시도해 주세요.
        </p>
        <div className="mt-10 flex gap-3">
          <button
            onClick={reset}
            className="rounded-full border border-border px-6 py-3 text-sm hover:bg-muted"
          >
            다시 시도
          </button>
          <Link
            href="/"
            className="rounded-full bg-navy px-6 py-3 text-sm text-white hover:bg-navy/90"
          >
            처음으로
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
