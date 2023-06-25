import { useQuery } from "@tanstack/react-query";
import { getNowPlaying } from "../api";
import MovieList from "../component/movieList/MovieList";

const QUERY_KEY = "now-playing";
export default function ComingSoon() {
  const { data, isLoading } = useQuery(
    ["movies", QUERY_KEY],
    getNowPlaying
  );


  return (
    <>
      <MovieList data={data} isLoading={isLoading} type={QUERY_KEY} />
    </>
  );
}
