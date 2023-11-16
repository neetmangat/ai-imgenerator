import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const res = await request.json();
  const prompt = res.prompt;

  const production = process.env.ENVIRONMENT === "production";

  // Connect to our Microsoft Azure Function endpoint
  const response = await fetch("/api/generateImage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  const textData = await response.text();

  return NextResponse.json(textData);
}
