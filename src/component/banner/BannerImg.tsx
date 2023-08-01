import { RotatingLines } from "react-loader-spinner";
import { getComingSoon, makeBgPath } from "../../api";
import useGetMovies from "../../hooks/useGetMovies";
import { useNavigate } from "react-router-dom";

interface BannerImgType {
    index: string
}
export default function BannerImg({ index }: BannerImgType) {
    const { bannerData, isLoading } = useGetMovies("coming_soon", getComingSoon);
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
        <>
            {isLoading ?
                <div className="loader">
                    <RotatingLines
                        strokeColor="grey"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="30"
                        visible={true}
                    />
                </div> :
                <>
                    <img src={makeBgPath(bannerData[index].backdrop_path)} alt={bannerData[index].title} />
                    <p className="coming-up">Coming Up Next Movie</p>
                    <p className="title">{bannerData[index].title}</p>
                    <button onClick={() => onBoxClick(bannerData[index]?.id)} className="more-button">more Information</button>
                </>
            }

        </>
    );
}

