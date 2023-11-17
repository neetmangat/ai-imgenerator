export async function GET(request: Request) {
  const endpoint = request.url;
  const production = process.env.ENVIRONMENT === "production";

  const fetchURL = production
    ? process.env.PRODUCTION_URL
    : process.env.DEV_URL;

  // Connect to our Microsoft Azure Function endpoint
  const response = await fetch(`${fetchURL}/getImages`, {
    cache: "no-store",
  });

  const blob = await response.blob();
  const textData = await blob.text();

  const data = JSON.parse(textData);

  return new Response(JSON.stringify(data), {
    status: 200,
  });
}
