import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { getComingSoon, makeBgPath } from "../api";
import Loader from "./Loader";
import { NextBtnIcon, PrevBtnIcon } from "../icons/icons";
import { Navigate, useNavigate } from "react-router-dom";


const CommingSoon = styled(motion.div) <{ bgPhoto: string }>`
  position: relative;
  height: 60vh;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  text-shadow: #000000 1px 0 10px;

`;
const P = styled.p`
  font-size: 20px;
  position: absolute;
  bottom : 18%;
  left: 5%;
  font-family: 'Roboto Slab', serif;
`
const Title = styled(P)`
  font-size: 3rem;
  bottom: 5%;
  left: 5%;
  font-weight: 700;

`
const MoreInfo = styled.button`
  padding: 10px 10px;
  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 5px;
  position: absolute;
  color: #ffffff;
  bottom: 5%;
  text-shadow: #000000 1px 0 10px;
  right: 5%;
  font-family: 'Roboto Slab', serif;
  font-weight: 600;
`
const NextBtn = styled(motion.button)`
  border: none;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 25%;
  right: 20px;
  cursor: pointer;
  background-color: transparent;
`;
const PrevBtn = styled(NextBtn)`
  left: 20px;
`;

const bannerVariant = {
  inVisible: { x: 500, opacity: 0, scale: 0 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1 } },
  exit: { x: -500, opacity: 0, scale: 0, transition: { duration: 0 } }
};

export default function Banner() {
  const { data, isLoading } = useQuery(["movies", "list"], getComingSoon);
  const [index, setIndex] = useState(0);
  const bannerData = data?.results.slice(0, 3);
  const navigate = useNavigate();
  const onNextIndex = () => {
    setIndex((prev) =>
      index === bannerData.length - 1 ? bannerData.length - 1 : prev + 1
    );
  };
  const onPrevIndex = () => {
    setIndex((prev) => (index === 0 ? 0 : prev - 1));
  };

  const onBoxClick = (id: number, title?: string) => {
    navigate(`movies/${id}`, {
      state: {
        movieTitle: title,
        movieId: id
      }
    });
  };
  return (

    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <AnimatePresence>
            <CommingSoon
              variants={bannerVariant}
              initial="invisible"
              animate="visible"
              exit="exit"
              key={index}
              bgPhoto={makeBgPath(bannerData[index].backdrop_path)}
            >
              <P>Coming Up Next Movie</P>
              <Title>{bannerData[index].title}</Title>
              <MoreInfo onClick={() => onBoxClick(bannerData[index].id, bannerData[index].title)}>more Information</MoreInfo>
            </CommingSoon>
          </AnimatePresence>

          <PrevBtn onClick={onPrevIndex}>
            <PrevBtnIcon />
          </PrevBtn>
          <NextBtn onClick={onNextIndex}>
            <NextBtnIcon />
          </NextBtn>
        </>
      )}
    </div>

  );
}
