import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { concertList } from "../concert/_lib/getConcert";
import { Libre_Baskerville } from "next/font/google";

const font = Libre_Baskerville({ subsets: ["latin"], weight: ["400"] });

export default function ConcertBox() {
  return (
    <>
    <h1 className="text-4xl tracking-wide text-center">
        <Link href={"/concert"}>
          <span className={font.className}>Concerts</span>
        </Link>
      </h1>
    <div className="grid mobile-size:grid-cols-1 grid-cols-3 gap-20">
      {concertList.slice(0,3).map((concert,index)=>(
        <Link href={`/concert/${concert.id}`} key={concert.id}>
        <div className="relative w-auto h-96 overflow-hidden rounded-lg">
          <div
            className="absolute inset-0 bg-cover bg-center bg-opacity-5 z-0"
            style={{ backgroundImage: `url('/${concert.id}/01.jpg')` }}
            />
          <div className="relative w-full h-full bg-black bg-opacity-40"></div>
          <Card className="absolute inset-0 z-10 h-full bg-transparent border-0">
            <CardHeader>
              <CardTitle className="text-white text-right">
              </CardTitle>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </div>
        <div className="mt-2 mobile-size:hidden text-sm text-center">
        {concert.title}
        </div>
      </Link>
      ))}
    </div>
      </>
  );
}
