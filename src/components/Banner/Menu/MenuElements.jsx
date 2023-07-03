import styled from "styled-components";

export const MenuStyled = styled.div`
  height: auto;
  width: 100%;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

export const TitleStyled = styled.h2`
  padding: 10px 0;
  border-top: 1px solid #ff8352;
  border-bottom: 1px solid #ff8352;
`;
export const SubtitleStyled = styled.h3`
  padding: 10px 0;
  border-bottom: 1px solid #ff8352;
`;

export const ArtGrid = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const Art = styled.div`
  height: 300px;
  width: 250px;
  padding: 10px;
  font-size: 25px;
  color: #000;
  border: solid 3px;
  border-color: #000f08;
  transition-property: box-shadow;
  transition-duration: 0.1s;
  box-shadow: 0px 0px 2px 0px grey;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    filter: contrast(100%);
    box-shadow: 0px 0px 15px 0px grey;
    background-size: 150%;
  }
`;

export const ArtImage = styled.img`
  filter: contrast(75%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

  transition: 0.5s ease;

  &:hover {
    filter: contrast(100%);
    transform: scale(1.2);
  }
`;

export const ArtLabel = styled.div`
  font-family: "Montserrat", cursive;
  font-weight: 700;
  z-index: 999;
  bottom: 0;
  left: 0;
  text-align: center;
  padding: 10px 0;
  font-size: 20px;
  color: white;
  background-color: #00000070;
  width: 100%;
  z-index: 1;
  position: absolute;
`;
