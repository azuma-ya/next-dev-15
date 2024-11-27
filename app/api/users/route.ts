import { setTimeout } from "node:timers/promises";
import { NextResponse } from "next/server";

export async function GET(_: Request) {
  const data = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => response.json()
  );

  console.log("user list api accessed");

  await setTimeout(6000);

  return NextResponse.json(data, { status: 200 });
}
