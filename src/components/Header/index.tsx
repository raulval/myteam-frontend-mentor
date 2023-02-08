import logo from "@/assets/logo.svg";
import { usePathname, useRouter } from "next/navigation";

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
  const pathname = usePathname();
  const router = useRouter();
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <Container extendNavbar={extendNavbar}>
      <Wrapper>
        <Logo src={logo} alt="MyTeam logo" />
        <Menu>
          <MenuLinkWrapper>
            <MenuLinkHome href={"/"} $active={pathname === "/" ? true : false}>
              home
            </MenuLinkHome>
            <MenuLinkAbout
              href={"/about"}
              $active={pathname === "/about" ? true : false}
            >
              about
            </MenuLinkAbout>
          </MenuLinkWrapper>
          <ContactButtonWrapper>
            <ContactButton onClick={() => router.push("/contact-us")}>
              contact us
            </ContactButton>
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
          <MenuLinkHome href={"/"} $active={pathname === "/" ? true : false}>
            home
          </MenuLinkHome>
          <MenuLinkAbout
            href={"/about"}
            $active={pathname === "/about" ? true : false}
          >
            about
          </MenuLinkAbout>
          <ContactButton onClick={() => router.push("/contact-us")}>
            contact us
          </ContactButton>
        </MobileMenu>
      </Wrapper>
    </Container>
  );
};

export default Header;
