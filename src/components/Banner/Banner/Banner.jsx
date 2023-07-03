import styled from "styled-components";

export const Banner = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("img/40 x 80.jpg");
  background-size: cover;
  background-position: center;
  filter: contrast(100%);
  border-bottom: solid 3px;
  border-color: #000f08;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.4;
  }

  & * {
    z-index: 2;
  }

  h2 {
    color: #fff;
    font-size: 35px;
  }
`;
