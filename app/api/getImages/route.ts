export async function GET(request: Request) {
  const production = process.env.ENVIRONMENT === "production";

  // Connect to our Microsoft Azure Function endpoint
  const response = await fetch(
    production
      ? `${process.env.PRODUCTION_URL}/getImages`
      : `${process.env.DEV_URL}/getImages`,
    {
      cache: "no-store",
    }
  );

  const blob = await response.blob();
  const textData = await blob.text();

  const data = JSON.parse(textData);

  return new Response(JSON.stringify(data), {
    status: 200,
  });
}
