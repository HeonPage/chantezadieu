import { concertList } from "@/app/(beforelogin)/concert/_lib/getConcert";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id, 10);
  const concert = concertList.find((c) => c.id === id);

  if (concert) {
    return NextResponse.json(concert);
  } else {
    return NextResponse.json({ message: "Concert not found" }, { status: 404 });
  }
}
