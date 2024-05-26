import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovie from "../hooks/usePopularMovie";
import useUpcomingMovie from "../hooks/useUpcomingMovie";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
import GptSearch from "../components/GptSearch";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import useMovieDetails from "../hooks/useMovieDetails";

function Browse() {
  const searchToggle = useSelector((store) => store.gpt.searchToggle);
  // custom hooks
  useNowPlayingMovies();
  usePopularMovie();
  useUpcomingMovie();
  useTopRatedMovie();
  useMovieDetails();
  return (
    <div className="bg-hero-pattern h-screen">
      <Header />
      {searchToggle ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Browse;
