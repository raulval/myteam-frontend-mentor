import logo from "@/assets/logo.svg";
import { useState } from "react";
import {
  ContactButton,
  ContactButtonWrapper,
  Container,
  Hamburger,
  Logo,
  Menu,
  MenuLinkAbout,
  MenuLinkHome,
  MenuLinkWrapper,
  MobileMenu,
  Wrapper,
} from "./styles";

const Header = () => {
  const [isActive, setIsActive] = useState("home");
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <Container extendNavbar={extendNavbar}>
      <Wrapper>
        <Logo src={logo} alt="MyTeam logo" />
        <Menu>
          <MenuLinkWrapper>
            <MenuLinkHome
              href={"/"}
              onClick={() => setIsActive("home")}
              isactive={isActive}
            >
              home
            </MenuLinkHome>
            <MenuLinkAbout
              href={"#"}
              onClick={() => setIsActive("about")}
              isactive={isActive}
            >
              about
            </MenuLinkAbout>
          </MenuLinkWrapper>
          <ContactButtonWrapper>
            <ContactButton>contact us</ContactButton>
          </ContactButtonWrapper>
        </Menu>
        <Hamburger
          onClick={() => {
            setExtendNavbar((curr) => !curr);
          }}
          extendNavbar={extendNavbar}
        >
          <div />
          <div />
          <div />
        </Hamburger>
        <MobileMenu extendNavbar={extendNavbar}>
          <MenuLinkHome
            href={"/"}
            onClick={() => setIsActive("home")}
            isactive={isActive}
          >
            home
          </MenuLinkHome>
          <MenuLinkAbout
            href={"#"}
            onClick={() => setIsActive("about")}
            isactive={isActive}
          >
            about
          </MenuLinkAbout>
          <ContactButton>contact us</ContactButton>
        </MobileMenu>
      </Wrapper>
    </Container>
  );
};

export default Header;
