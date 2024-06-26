# Netflix GPT

## Overview

Netflix-GPT is a React web application that provides personalized movie recommendations powered by OpenAI's GPT. It fetches movie data via the ChatGPT API, offering a user-friendly interface with customization options. Users can explore movies tailored to their taste, sign up, log in, update their profile, and enjoy a seamless browsing experience.

## Setup
- Create React App
- Configure Tailwindcss
- Header
- Routin of App
- Login Form
- Sign up Form
- Form Validation
- useRef Hook
- Firebase setup
- Deploying out app to production
- Create Sign up user account
- Implement Sign In user Api
- Created Redux Store with userSlice
- Update Profile bugs fixed on 3:45
- Fetch from TMDB Movies
- BugFix:Sign up user displayName and profile update 
- BugFix:if user is not logged in Redirect to login page '/' and vice-versa
- Unsubscribse to onAuthStateChanged CallBack
- Add hardcoded values to the constants file(avatar,api,etc)
- Register TMDB APi & create an app  and get access token
- Get Data from TMDB now palying movies list API
- Custom Hook for nowPlayingMovies
- Create MovieSlice
- Update Store with movie Data
- Planning for MainContainer and SecondaryContainer
- Fetch Data for Trailer Video
- Update Store with Trailer Video
- Embedded the Youtube video and make it autopaly and mute 
- Tailwind Classes to make MainContainer look Awesome 
- Build Secondary Container
- Build Movies List
- Build Movie Card
- TMDB Image CDN URL
- Made the Browse page amazing with tailwind CSS
- Hide Scroll Bar using tailwind utilities
- usePopular Custom hook
- useTopRated Custom hook etc..
- GPT Search Bar
- Multi-language feature in App
-
## Key Features
-Login/Sign Up
    -Sign In / Sign Up Form 
    -redirect to Browse Page
- Browse  (After Authencation)
    -Header
    -Main Movie
        -Trailer in Background
        -Title and Description
        -Movies Suggestions
            -MovieList * n
-NetflixGPT
    -Search Bar
    -Movie Suggestions



- Create React App with TailwindCSS configuration
- Header component for easy navigation
- User authentication with sign-up and login forms
- Form validation for input fields
- Use of useRef hook for form management
- Firebase setup for user authentication
- Deployment to production environment
- Account creation and sign-in functionality
- Redux store setup with userSlice for state management
- Implement sign-out feature
- Profile update capability
- Bug fixes for sign-up user data and profile picture update
- Bug fixes for redirection to login page if user is not logged in
- Unsubscribe from onAuthStateChanged callback
- Integration of hardcoded values in the constants file
- Registration of TMDB API, creation of app, and acquisition of access token
- Fetching data from TMDB's now playing movies list API
- Custom hook for fetching now playing movies
- Creation of movieSlice and update of store with movies data
- MainContainer and secondary container planning
- Fetching trailer video data and updating store
- Embedding YouTube video with autoplay and mute options
- Application of Tailwind CSS classes for UI enhancement
- Implementation of features for responsive design
- GPT search page and search bar creation
- Fetching GPT movies suggestions from TMDB
- Creation of gptSlice and addition of data
- Reuse of Movie List component to make movie suggestion container
- Memoization for performance optimization
- Addition of .env file and configuration for TMDB and OpenAI API keys

## Project Setup

1. Clone the repository
2. Add TMDB and OpenAI API keys to the `.env` file
3. Install dependencies with `npm install`
4. Run the app locally with `npm start`
5. Explore personalized movie recommendations and enjoy!

## Contributions

Contributions are welcome! Feel free to submit bug fixes, feature enhancements, or suggestions via pull requests. Please ensure to follow the project's code of conduct.

<!-- ## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details. -->
