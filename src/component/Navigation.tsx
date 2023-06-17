import { motion } from "framer-motion";
import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
const Ul = styled.ul`
  width: 100%;
  text-align: center;
`;
const Li = styled.li`
  display: inline-block;
  font-weight: 700;
  margin-right: 20px;
  font-size: 20px;
  position: relative;
`;

const Circle = styled(motion.div)`
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

export default function Navigation() {
  const homeMatch = useMatch("/");
  const comingSoonMatch = useMatch("coming-soon");
  const nowPlayingMatch = useMatch("now-playing");

  return (
    <Nav>
      <Ul>
        <Li>
          <Link to="/">
            POPULAR
            {homeMatch && <Circle layoutId="circle" />}
          </Link>
        </Li>
        <Li>
          <Link to="coming-soon">
            COMING SOON
            {comingSoonMatch && <Circle layoutId="circle" />}
          </Link>
        </Li>
        <Li>
          <Link to="now-playing">
            NOW PLAYING
            {nowPlayingMatch && <Circle layoutId="circle" />}
          </Link>
        </Li>
      </Ul>
    </Nav>
  );
}
