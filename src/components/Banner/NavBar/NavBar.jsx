import React from "react";
import imgLogo from "../../../assets/logo.png";
import imgUser from "../../../assets/user.svg";
import {
  NavBarStyle,
  ContainerNavbar,
  LinkStyled,
  Logo,
  User,
} from "./NavBarElements";

export const Nav = () => {
  return (
    <NavBarStyle>
      <ContainerNavbar>
        <LinkStyled to="/">
          <Logo src={imgLogo} />
        </LinkStyled>
        <LinkStyled>
          <User src={imgUser} />
        </LinkStyled>
      </ContainerNavbar>
    </NavBarStyle>
  );
};
