import { useQuery } from "@tanstack/react-query";
import { getPopular } from "../api";
import MovieList from "../component/movieList/MovieList";

const QUERY_KEY = "popular";
export default function ComingSoon() {
  const { data, isLoading } = useQuery(
    ["movies", QUERY_KEY],
    getPopular
  );


  return (
    <>
      <MovieList data={data} isLoading={isLoading} type={""} />
    </>
  );
}
