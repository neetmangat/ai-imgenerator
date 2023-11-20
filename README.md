# The IMGenerator

## Production

- Deployment Link: https://ai-imgenerator.vercel.app
- GitHub Repo Link: https://github.com/neetmangat/ai-imgenerator
- YouTube Build Link: https://www.youtube.com/watch?v=1KPG3LiE4jU&t=11809s

## Development

1. Clone the repository and install dependencies

```bash
git clone https://github.com/neetmangat/ai-imgenerator ai-imgenerator && cd ai-imgenerator && npm install
```

2. Generate your own OpenAI API key on the [OpenAI Platform](http://platform.openai.com)

3. Set up a [Microsoft Azure](https://portal.azure.com/) account, Function App, Storage Account, and Resource Group

4. Add the server environment variables

```
cp .env.example .env.local
```

5. Add the Azure environment variables

```
cp /azure/local.settings.example.json /azure/local.settings.json
```

6. Run the development server:

```bash
yarn run dev
```

7. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
