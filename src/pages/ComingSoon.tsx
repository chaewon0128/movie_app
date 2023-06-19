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

const Wrapper = styled(motion.div)`
  position: relative;
`;
const Box = styled(motion.div) <{ bgPhoto: string }>`
  height: 400px;
  border-radius: 10px;
  background-color: white;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  cursor: pointer;
`;
const MovieTitle = styled.h3`
  font-size: 28px;
  text-align: center;
  margin-top: 20px;
  font-family: "Francois One", sans-serif;
`;

const boxVariant = {
  initial: { scale: 1, y: 0 },
  hover: { scale: 1.2, y: -30, transition: { delay: 0.2 } }
};


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

const itemVariant = {
  start: { y: 20, opacity: 0 },
  exit: { y: 0, opacity: 1 }
}
export default function ComingSoon() {
  const { data, isLoading } = useQuery(
    ["movies", "coming-soon"],
    getComingSoon
  );
  const movieMatch = useMatch("coming-soon/movies/:id");
  const navigate = useNavigate();
  const onBoxClick = (id: number, title?: string) => {
    navigate(`movies/${id}`, {
      state: {
        movieTitle: title,
        movieId: id
      }
    });
  };

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
