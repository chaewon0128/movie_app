import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderMain = styled(motion.div)`
position: fixed;
top: 0;
width: 100%;
padding: 20px 30px 20px 30px;
display: flex;
justify-content: space-between;
align-items: center;
z-index: 9;
`
export const Logo = styled(motion.svg)`
fill: ${(props) => props.theme.redColor};
    path {
      stroke-width: 7px;
      stroke: white;
    }
`
export const Search = styled.div`
    display: flex;
`

export const SearchBtn = styled(motion.button)`
margin-left:10px;
background-color: transparent;
border: none;
cursor: pointer;
`
export const Input = styled(motion.input)`
    width: 200px;
    height: 30px;
    padding-left: 10px;
    transform-origin: left center;
`
export const logoVariant = {

    start: { fillOpacity: 1 },
    end: {
        fillOpacity: [0, 1],
        transition: { duration: 3 }
    },
}

export const inputVariant = {
    start: { scaleX: 0 },
    end: { scaleX: 1, transition: { type: "linear" } }
}