import logo from "@/assets/logo.svg";
import { useState } from "react";
import {
  ContactButton,
  Container,
  Logo,
  Menu,
  MenuLinkAbout,
  MenuLinkHome,
  MenuLinkWrapper,
  Wrapper,
} from "./styles";

const Header = () => {
  const [isActive, setIsActive] = useState("home");

  return (
    <Container>
      <Wrapper>
        <Logo src={logo} alt="MyTeam logo" />
        <Menu>
          <MenuLinkWrapper>
            <MenuLinkHome
              href={"/"}
              onClick={() => setIsActive("home")}
              isActive={isActive}
            >
              home
            </MenuLinkHome>
            <MenuLinkAbout
              href={"#"}
              onClick={() => setIsActive("about")}
              isActive={isActive}
            >
              about
            </MenuLinkAbout>
          </MenuLinkWrapper>
          <ContactButton>contact us</ContactButton>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Header;
