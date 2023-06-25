import { Link, useMatch } from "react-router-dom";
import { Circle, Li } from "./styled";

interface INaviMenu {
    title: string,
    link: string
}
export default function NaviMenu({ title, link }: INaviMenu) {
    const match = useMatch(link);
    return (
        <Li>
            <Link to={link}>
                {title}
                {match && <Circle layoutId="circle" />}
            </Link>
        </Li>
    );
}

