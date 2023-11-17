export async function GET(request: Request) {
  const production = process.env.ENVIRONMENT === "production";

  const fetchURL = production
    ? process.env.PRODUCTION_URL
    : process.env.DEV_URL;

  // Connect to our Microsoft Azure Function endpoint
  const response = await fetch(`${fetchURL}/getChatGPTSuggestion`, {
    cache: "no-store",
  });

  const textData = await response.text();

  return new Response(JSON.stringify(textData.trim()), {
    status: 200,
  });
}
