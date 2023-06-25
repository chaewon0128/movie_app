import { useQuery } from "@tanstack/react-query";
import { getComingSoon } from "../api";
import MovieList from "../component/movieList/MovieList";

const QUERY_KEY = "coming-soon";
export default function ComingSoon() {
  const { data, isLoading } = useQuery(
    ["movies", QUERY_KEY],
    getComingSoon
  );


  return (
    <>
      <MovieList data={data} isLoading={isLoading} type={QUERY_KEY} />
    </>
  );
}
