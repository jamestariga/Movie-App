# Movie App

This is a simple movie app that uses the [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction) to display movies and their details.

## Getting Started

To get started, you will need to create an account on [TMDB](https://www.themoviedb.org/account/signup) and request an API key. Once you have your API key, you will need to create a `.env` file in the root of the project and add the following line:

```
VITE_APP_TMDB_KEY="YOUR_API_KEY"
```

## Running the App

To run the app, you can use the following commands:

```bash
# Install dependencies
npm install

# Run the app in development mode
npm run dev
```

## Current Features

✅ Display a list of movies

✅ Display movie details

✅ Display movie cast and their bio

❌ Search for movies

❌ Filter movies by genre

❌ Create a watchlist and add or remove movies to it

❌ Create a user login with authentication
