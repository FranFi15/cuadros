import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBarStyle = styled.div`
  height: 60px;
  width: 100%;
  background-color: #fbf7f4;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-bottom: 1px solid #445e93;
  position: fixed;
  z-index: 999;
`;

export const ContainerNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 100%;
  height: 100%;
  width: 90%;
`;

export const LinkStyled = styled(Link)`
  max-height: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  max-width: 200px;
  height: auto;
  max-height: 100%;
  transition: 0.5s;

  &:hover {
    transition: 0.5s;
    scale: 110%;
  }
`;

export const UserContainer = styled.div`
  position: relative;
`;

export const User = styled.img`
  width: 35px;
  height: 35px;
`;

export const Divider = styled.div`
  display: inline-block;
  border-left: 2px solid #445e93;
  margin: 0 25px;
  height: 25px;
`;

export const LoginButton = styled.button`
  cursor: pointer;
  color: #ffffff;
  border-radius: 8px;
  padding: 10px 15px;
  border: none;
  margin: 0 5px;
  font-size: 14px;
  font-family: "Poppins-SemiBold", Helvetica, Arial, sans-serif;
  background-image: linear-gradient(130deg, #ff9259 0%, #ff2426 70%);
`;

export const NavigationMenu = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
`;
