import { setTimeout } from "node:timers/promises";
import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  const { userId } = await params;
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  ).then((response) => response.json());

  console.log("users api accessed");

  await setTimeout(4000);

  return NextResponse.json(data, { status: 200 });
}
