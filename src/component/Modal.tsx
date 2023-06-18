import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { IMovieDetail, getMovie, makeBgPath } from "../api";
import { DeleteIcon } from "../icons/icons";

const ModalBox = styled.div`
  position: fixed;
  top: 5%;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 99;
  background: rgb(38, 35, 35);
  background: linear-gradient(
    0deg,
    rgba(38, 35, 35, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  width: 500px;
  height: 700px;
  border-radius: 10px;
  overflow: hidden;
`;
const DeleteBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
const ModalImage = styled.div<{ bgImg: string }>`
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center center;
  background-image: linear-gradient(to Top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),
    url(${(props) => props.bgImg});
`;
const ModalTitle = styled.h3`
  font-size: 35px;
  padding: 20px;
  font-family: "Anton", sans-serif;
`;
const ModalOverview = styled.p`
  padding: 0 20px;
  margin-bottom: 10px;
  line-height: 20px;
`;

const ModalInfo = styled.p`
  padding: 5px 20px;
`;

export default function Modal() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id } = useParams()
  const { data } = useQuery<IMovieDetail>(["movies", id], () =>
    getMovie(state?.movieId + "")
  );

  console.log(data?.homepage)

  const onDelete = () => {
    navigate(-1);
  };
  return (
    <ModalBox>
      <DeleteBtn onClick={onDelete}>
        <DeleteIcon />
      </DeleteBtn>
      {data && <>
        <ModalImage bgImg={makeBgPath(data?.backdrop_path || "")} />
        <ModalTitle>{data?.title}</ModalTitle>
        <ModalOverview>{data?.overview}</ModalOverview>
        <ModalInfo>Budget : $ {(data?.budget).toLocaleString()}</ModalInfo>
        <ModalInfo>Revenue: $ {(data?.revenue).toLocaleString()}</ModalInfo>
        <ModalInfo>Runtime : {data?.runtime} minutes</ModalInfo>
        <ModalInfo>Rating : {(data?.vote_average).toFixed(1)}</ModalInfo>
        <ModalInfo>Homepage : <a href={data?.homepage}>{data?.homepage}</a></ModalInfo>
      </>}
    </ModalBox>
  );
}
