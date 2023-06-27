import { motion } from "framer-motion";
import styled from "styled-components";

export const CommingSoon = styled(motion.div) <{ bgPhoto: string }>`
  position: relative;
  height: 60vh;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  text-shadow: #000000 1px 0 10px;

`;
export const P = styled.p`
  font-size: 20px;
  position: absolute;
  bottom : 18%;
  left: 5%;
  font-family: 'Roboto Slab', serif;
`
export const Title = styled(P)`
  font-size: 3rem;
  bottom: 5%;
  left: 5%;
  font-weight: 700;

`
export const MoreInfo = styled.button`
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
export const NextBtn = styled(motion.button)`
  border: none;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 25%;
  right: 20px;
  cursor: pointer;
  background-color: transparent;
`;
export const PrevBtn = styled(NextBtn)`
  left: 20px;
`;

export const bannerVariant = {
    inVisible: { x: 500, opacity: 0, scale: 0 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1 } },
    exit: { x: -500, opacity: 0, scale: 0, transition: { duration: 0 } }
};