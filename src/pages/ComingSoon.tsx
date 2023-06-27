import { getComingSoon } from "../api";
import MovieList from "../component/movieList/MovieList";

export default function ComingSoon() {

  const QUERY_KEY = "coming-soon";
  return (
    <>
      <MovieList apiFn={getComingSoon} type={QUERY_KEY} QUERY_KEY={QUERY_KEY} />
    </>
  );
}
