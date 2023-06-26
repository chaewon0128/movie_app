import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { getComingSoon, makeBgPath } from "../../api";
import { NextBtnIcon, PrevBtnIcon } from "../../icons/icons";
import { useNavigate } from "react-router-dom";
import { CommingSoon, P, Title, MoreInfo, NextBtn, PrevBtn, bannerVariant } from "./styled";
import useGetMovies from "../../hooks/useGetMovies";


export default function Banner() {
  const { bannerData } = useGetMovies("coming_soon", getComingSoon);
  const [index, setIndex] = useState(0);
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
      {bannerData &&
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
      }
    </div>

  );
}
