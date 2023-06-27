import styled from "styled-components";

export default function Loader() {
  const Loader = styled.div`
    font-size: 60px;
    font-weight: 700;
    width: 100%;
    text-align: center;
  `;
  return <Loader>loading...</Loader>;
}
