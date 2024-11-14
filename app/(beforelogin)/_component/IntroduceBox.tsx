import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function IntroduceBox() {
  return (
    <div className="grid mobile-size:grid-cols-1 grid-cols-3 gap-6">
      <Link href={"/about"}>
        <div className="relative w-auto h-32 mobile-size:h-20 overflow-hidden rounded-lg">
          <div
            className="absolute inset-0 bg-cover bg-center bg-opacity-5 z-0"
            style={{ backgroundImage: `url('/in01.jpg')` }}
          />
          <div className="relative w-full h-full bg-black bg-opacity-40"></div>
          <Card className="absolute inset-0 z-10 h-full bg-transparent border-0">
            <CardHeader>
              <CardTitle className="text-white text-right">
                {"합창단 소개"}
              </CardTitle>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </div>
      </Link>
      <Link href={"/concert"}>
        <div className="relative w-auto h-32 mobile-size:h-20 overflow-hidden rounded-lg">
          <div
            className="absolute inset-0 bg-cover bg-center bg-opacity-5 z-0"
            style={{ backgroundImage: `url('/in02.jpg')` }}
          />
          <div className="relative w-full h-full bg-black bg-opacity-60"></div>
          <Card className="absolute inset-0 z-10 h-full bg-transparent border-0">
            <CardHeader>
              <CardTitle className="text-white text-right">
                {"연주회"}
              </CardTitle>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </div>
      </Link>
      <Link href={"/sponser"}>
        <div className="relative w-auto h-32 mobile-size:h-20 overflow-hidden rounded-lg">
          <div
            className="absolute inset-0 bg-cover bg-center bg-opacity-5 z-0"
            style={{ backgroundImage: `url('/in04.jpg')` }}
          />
          <div className="relative w-full h-full bg-black bg-opacity-60"></div>
          <Card className="absolute inset-0 z-10 h-full bg-transparent border-0">
            <CardHeader>
              <CardTitle className="text-white text-right">
                {"후원 안내"}
              </CardTitle>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </div>
      </Link>
    </div>
  );
}
