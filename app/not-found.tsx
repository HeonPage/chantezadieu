import Link from "next/link";
import Header from "./_component/Header";
import Footer from "./_component/Footer";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container-page flex flex-1 flex-col items-center justify-center py-32 text-center">
        <span className="font-display text-8xl italic text-gold">404</span>
        <h1 className="mt-6 font-serif text-3xl">페이지를 찾을 수 없습니다</h1>
        <p className="mt-4 text-muted-foreground">
          주소가 바뀌었거나 삭제된 페이지입니다.
        </p>
        <Link
          href="/"
          className="mt-10 rounded-full bg-navy px-6 py-3 text-sm text-white hover:bg-navy/90"
        >
          처음으로
        </Link>
      </main>
      <Footer />
    </div>
  );
}
