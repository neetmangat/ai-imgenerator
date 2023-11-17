export async function GET(request: Request) {
  const production = process.env.ENVIRONMENT === "production";

  // Connect to our Microsoft Azure Function endpoint
  const response = await fetch(
    production
      ? `${process.env.PRODUCTION_URL}/getChatGPTSuggestion`
      : `${process.env.DEV_URL}/getChatGPTSuggestion`,
    // : "http://localhost:7071/api/getChatGPTSuggestion",
    {
      cache: "no-store",
    }
  );

  const textData = await response.text();

  return new Response(JSON.stringify(textData.trim()), {
    status: 200,
  });
}
