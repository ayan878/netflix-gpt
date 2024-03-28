import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovie from "../hooks/usePopularMovie";
import useUpcomingMovie from "../hooks/useUpcomingMovie";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
function Browse() {
 useNowPlayingMovies()
 usePopularMovie()
 useUpcomingMovie()
 useTopRatedMovie()
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
}

export default Browse;
