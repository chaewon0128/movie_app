import { getNowPlaying } from "../api";
import MovieList from "../component/movieList/MovieList";

export default function ComingSoon() {
  const QUERY_KEY = "now-playing";

  return (
    <>
      <MovieList apikey={getNowPlaying} type={QUERY_KEY} QUERY_KEY={QUERY_KEY} />
    </>
  );
}
