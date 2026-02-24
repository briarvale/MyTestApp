# MyTestApp

Simple Node.js + Express demo app.

## Start

Install dependencies:

```bash
npm install
```

Start the app:

```bash
npm start
```

Open http://localhost:3000/index.html and click "Show me a Cat!" to fetch a random cat image.

## Cat Feature

The app exposes an API route `/api/cat` which returns a JSON object `{ url: string }` with a random cat image URL from TheCatAPI.

To use an API key (optional, gives higher rate limits):

```bash
export CAT_API_KEY="your_key_here"
npm start
```

## Docker

Build and run with Docker:

```bash
docker build -t mytestapp:latest .
docker run -p 3000:3000 --env CAT_API_KEY=$CAT_API_KEY mytestapp:latest
```

Or with docker-compose:

```bash
docker-compose up --build
```
