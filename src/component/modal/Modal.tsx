import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ModalBox, DeleteBtn, ModalImage, ModalTitle, ModalInfo, ModalOverview } from "./styled";
import { IMovieDetail, getMovie, makeBgPath } from "../../api";
import { DeleteIcon } from "../../icons/icons";


export default function Modal() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id } = useParams()
  const { data } = useQuery<IMovieDetail>(["movies", id], () =>
    getMovie(state?.movieId + "")
  );


  const onDelete = () => {
    navigate(-1);
  };
  return (
    <ModalBox>
      <DeleteBtn onClick={onDelete}>
        <DeleteIcon />
      </DeleteBtn>
      {data && <>
        <ModalImage bgImg={makeBgPath(data.backdrop_path || "")} />
        <ModalTitle>{data.title}</ModalTitle>
        <ModalOverview>{data.overview}</ModalOverview>
        <ModalInfo>Budget : $ {(data.budget).toLocaleString()}</ModalInfo>
        <ModalInfo>Revenue: $ {(data.revenue).toLocaleString()}</ModalInfo>
        <ModalInfo>Runtime : {data.runtime} minutes</ModalInfo>
        <ModalInfo>Rating : {(data.vote_average).toFixed(1)}</ModalInfo>
        <ModalInfo>Homepage : <a href={data.homepage}>{data.homepage}</a></ModalInfo>
      </>}
    </ModalBox>
  );
}
