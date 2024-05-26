import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const randomNumber = Math.floor(Math.random() * 20);
  const mainMovie = movies.results[randomNumber];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative overflow-hidden">

      {/* Added relative for positioning */}
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
      <style jsx>{`
        .relative {
          position: relative; /* Establish a stacking context for child elements */
        }

        @media (max-width: 768px) {
          /* Adjust styles for smaller screens */
          .pt-[40%] {
            padding-top: 20%; /* Adjust padding for smaller heights */
          }
        }
      `}</style>
    </div>
  );
};

export default MainContainer;
