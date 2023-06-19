import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useMatch, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled(motion.div)`
  position: relative;
`;
const Box = styled(motion.div) <{ bgPhoto: string }>`
  height: 400px;
  border-radius: 10px;
  background-color: white;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  cursor: pointer;
`;
const MovieTitle = styled.h3`
  font-size: 28px;
  text-align: center;
  margin-top: 20px;
  font-family: "Francois One", sans-serif;
`;

const itemVariant = {
    start: { y: 20, opacity: 0 },
    exit: { y: 0, opacity: 1 }
}
const boxVariant = {
    start: { y: 10, opacity: 0 },
    hover: { scale: 1.2, y: -30, transition: { delay: 0.2 } },
};

interface IMovieList {
    title: string,
    bgPhoto: string,
    id: number
}
export default function MovieList({ title, bgPhoto, id }: IMovieList) {
    const navigate = useNavigate();
    const onBoxClick = (id: number, title?: string) => {
        navigate(`movies/${id}`, {
            state: {
                movieTitle: title,
                movieId: id
            }
        });
    };
    return (
        <Wrapper variants={itemVariant}>
            <Box
                onClick={() => onBoxClick(id, title)}
                variants={boxVariant}
                whileHover="hover"
                transition={{ delay: 0.2 }}
                bgPhoto={bgPhoto}
            />
            <MovieTitle>{title}</MovieTitle>
        </Wrapper>

    );
}
MovieList.propTypes = {
    title: PropTypes.string,
    id: PropTypes.number,
    bgPhoto: PropTypes.string,
};