import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovie from "../hooks/usePopularMovie";
import useUpcomingMovie from "../hooks/useUpcomingMovie";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
import GptSearch from "../components/GptSearch";
import { useSelector } from "react-redux";

function Browse() {
  const searchToggle=useSelector((store)=>store.gpt.searchToggle)
  // custom hooks
  useNowPlayingMovies();
  usePopularMovie();
  useUpcomingMovie();
  useTopRatedMovie();
  return (
    <div>
      <Header />
      {searchToggle ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
}

export default Browse;
