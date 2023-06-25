import { motion } from "framer-motion";
import styled from "styled-components";

export const Nav = styled.nav`
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
export const Ul = styled.ul`
  width: 100%;
  text-align: center;
`;
export const Li = styled.li`
  display: inline-block;
  font-weight: 700;
  margin-right: 20px;
  font-size: 20px;
  position: relative;
`;

export const Circle = styled(motion.div)`
  width: 8px;
  height: 8px;
  background-color: ${(props) => props.theme.redColor};
  border-radius: 10px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  margin-top: 8px;
`;
