import styled from "styled-components";

export const ModalBox = styled.div`
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
export const DeleteBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
export const ModalImage = styled.div<{ bgImg: string }>`
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center center;
  background-image: linear-gradient(to Top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),
    url(${(props) => props.bgImg});
`;
export const ModalTitle = styled.h3`
  font-size: 35px;
  padding: 20px;
  font-family: "Anton", sans-serif;
`;
export const ModalOverview = styled.p`
  padding: 0 20px;
  margin-bottom: 10px;
  line-height: 20px;
`;

export const ModalInfo = styled.p`
  padding: 5px 20px;
`;

export const Loader = styled.div`
position : absolute;
margin: 0 auto;
top: 20%;
left: 50%;
`