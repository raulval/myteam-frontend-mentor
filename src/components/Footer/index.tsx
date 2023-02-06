import github from "@/assets/icons/icon-github.svg";
import linkedin from "@/assets/icons/icon-linkedin.svg";
import logo from "@/assets/logo.svg";
import { usePathname } from "next/navigation";
import {
  Address,
  Container,
  Content,
  Copyright,
  FooterNav,
  FooterNavLink,
  Logo,
  SocialIcon,
  SocialLink,
  Socials,
} from "./styles";

const Footer = () => {
  const pathname = usePathname();

  return (
    <Container>
      <Content>
        <Logo src={logo} alt="Logo image" />
        <FooterNav>
          <FooterNavLink href={"/"} active={pathname === "/" ? true : false}>
            home
          </FooterNavLink>
          <FooterNavLink
            href={"/about"}
            active={pathname === "/about" ? true : false}
          >
            about
          </FooterNavLink>
        </FooterNav>
        <Address>
          <p>987 Hillcrest Lane</p>
          <p>Irvine, CA</p>
          <p>California 92714</p>
          <p>Call Us : 949-833-7432</p>
        </Address>
        <Socials>
          <SocialLink href={"https://www.linkedin.com/in/raulval/"}>
            <SocialIcon
              src={linkedin}
              alt="Linkedin icon"
              width={32}
              height={32}
            />
          </SocialLink>
          <SocialLink href={"https://github.com/raulval"}>
            <SocialIcon src={github} alt="Github icon" width={40} height={40} />
          </SocialLink>
        </Socials>
        <Copyright>Copyright 2023. All Rights Reserved</Copyright>
      </Content>
    </Container>
  );
};

export default Footer;
