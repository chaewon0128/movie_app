import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { getComingSoon, makeBgPath } from "../api";
import Loader from "./Loader";
import { NextBtnIcon, PrevBtnIcon } from "../icons/icons";

const Container = styled.div``;

const CommingSoon = styled(motion.div)<{ bgPhoto: string }>`
  height: 60vh;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
`;

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
  const { data, isLoading } = useQuery(["movies", "banner"], getComingSoon);
  const [index, setIndex] = useState(0);
  const bannerData = data?.results.slice(0, 3);
  const onNextIndex = () => {
    setIndex((prev) =>
      index === bannerData.length - 1 ? bannerData.length - 1 : prev + 1
    );
  };
  const onPrevIndex = () => {
    setIndex((prev) => (index === 0 ? 0 : prev - 1));
  };
  return (
    <>
      <Container>
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
              />
            </AnimatePresence>

            <NextBtn onClick={onNextIndex}>
              <NextBtnIcon />
            </NextBtn>
            <PrevBtn onClick={onPrevIndex}>
              <PrevBtnIcon />
            </PrevBtn>
          </>
        )}
      </Container>
    </>
  );
}
