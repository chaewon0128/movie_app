import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import styled from "styled-components";
import Loader from "../component/Loader";
import { getComingSoon, IMovie, makeImagePath } from "../api";
import { useMatch, useNavigate } from "react-router-dom";
import Modal from "../component/Modal";
import Overlay from "../component/Overlay";
import MovieList from "../component/MovieList";

const ComingSoonList = styled(motion.div)`
  margin: 0 auto;
  width: 900px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px;
  padding-bottom: 100px;
`;


const movieVariant = {
  start: { opacity: 0 },
  exit: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2
    }
  }
};


export default function ComingSoon() {
  const { data, isLoading } = useQuery(
    ["movies", "coming-soon"],
    getComingSoon
  );
  const movieMatch = useMatch("coming-soon/movies/:id");

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ComingSoonList variants={movieVariant} initial="start" animate="exit">
          {data?.results.map((movie: IMovie) => (
            <MovieList title={movie.title} bgPhoto={makeImagePath(movie.poster_path)} id={movie.id} />
          ))}
        </ComingSoonList>
      )}
      {movieMatch && (
        <>
          <Overlay />
          <Modal />
        </>
      )}
    </>
  );
}
