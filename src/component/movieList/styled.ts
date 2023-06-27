import { motion } from 'framer-motion';
import styled from 'styled-components';

export const List = styled(motion.div)`
  margin: 0 auto;
  width: 900px;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 70px;

`;
export const Wrapper = styled(motion.div)`


`;

export const Box = styled(motion.div) <{ bgPhoto: string }>`
  height: 400px;
  border-radius: 10px;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  

`;
export const MovieTitle = styled.h3`
  font-size: 28px;
  text-align: center;
  margin-top: 20px;
  font-family: "Francois One", sans-serif;
`;

export const itemVariant = {
  start: { y: 20, opacity: 0 },
  exit: { y: 0, opacity: 1 }
}
export const boxVariant = {
  start: { y: 10, opacity: 0 },
  hover: { scale: 1.2, y: -30, transition: { delay: 0.2 } },
};


export const movieVariant = {
  start: { opacity: 0 },
  exit: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2
    }
  }
};