
export const Logo="../assets/Netflix_Logo_PMS.png"
export const avatar="../assets/profile-icon.png"
export const profileURL="https://avatars.githubusercontent.com/u/91191292?s=96&v=4";
// now playing tmdb api
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzFlODE0ZDlhZTU5NjNmY2E3ZjM4NTZiODU5NzYxMyIsInN1YiI6IjY1ZjliNzI5MTVhNGExMDE2YjBkNjFhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F5AF3HmKwf7LUIhOL8xTf4OiZWTbkLx6SsA5-bzrs4I",
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hi", name: "Hindi" },
  { identifier: "ar", name: "Arabic" },
];

// export const OPENAI_API_KEY = "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";


export const OPENAI_KEY = process.env.REACT_APP_OPENAI_API_KEY;

