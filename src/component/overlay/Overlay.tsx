import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
`;


export default function Overlay() {
    const navigate = useNavigate();
    const onDelete = () => {
        navigate(-1);
    };
    return (
        <>

            <Container onClick={onDelete} />
        </>


    );
}

