import { Nav, Ul } from "./styled";
import NaviMenu from "./NaviMenu";

export default function Navigation() {

  return (
    <Nav>
      <Ul>
        <NaviMenu title="POPULAR" link="/" />
        <NaviMenu title="COMING SOON" link="coming-soon" />
        <NaviMenu title="NOW PLAYING" link="now-playing" />
      </Ul>
    </Nav>
  );
}
