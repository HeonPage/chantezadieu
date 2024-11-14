import Header from "../_component/Header";
import Footer from "../_component/Footer";
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Chantez a dieu - ",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Header />
      <div className="flex-1 mobile-size:w-full tablet-size:w-full flex flex-col">
        {children}
      </div>
      <Footer />
    </main>
  );
}
