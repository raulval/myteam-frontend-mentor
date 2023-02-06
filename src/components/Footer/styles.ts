import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface FooterProps {
  active?: boolean;
}

export const Container = styled.footer`
  padding-top: 4rem;
  padding-bottom: 4rem;
  margin-top: auto;
  background-color: ${(props) => props.theme.colors.footer.background};

  @media (min-width: 768px) {
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
  }

  @media (min-width: 1440px) {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`;

export const Content = styled.div`
  margin-inline: auto;
  width: calc(100% - 3rem);
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 689px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(3, minmax(0, 1fr));
    row-gap: 1rem;
  }

  @media (min-width: 1440px) {
    width: 1110px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
`;

export const Logo = styled(Image)`
  margin-bottom: 1.5rem;
  width: 6rem;
  height: auto;

  @media (min-width: 768px) {
    margin-bottom: 0;
    align-self: flex-start;
  }

  @media (min-width: 1440px) {
    width: auto;
  }
`;

export const FooterNav = styled.ul`
  display: grid;
  grid-auto-flow: column;
  column-gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    text-align: left;
    grid-row-start: 2;
    margin-bottom: 0;
    align-self: flex-end;
    width: max-content;
  }
`;

export const FooterNavLink = styled(Link)<FooterProps>`
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) =>
    props.active
      ? props.theme.colors.primary.main
      : props.theme.colors.primary.text};

  text-decoration: ${(props) => (props.active ? "2px underline" : "none")};
  text-underline-offset: ${(props) => (props.active ? "0.25rem" : "none")};

  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

export const Address = styled.address`
  margin-bottom: 2.5rem;
  text-align: center;
  opacity: 0.6;
  font-style: normal;
  color: #fff;
  font-size: 0.9375rem;
  line-height: 1.5625rem;
  font-weight: 600;

  @media (min-width: 768px) {
    text-align: right;
    grid-row: span 2 / span 2;
    margin-bottom: 0;
  }

  @media (min-width: 1440px) {
    text-align: left;
  }
`;

export const Socials = styled.div`
  display: grid;
  margin-bottom: 1rem;
  align-items: center;
  column-gap: 1rem;
  grid-auto-flow: column;

  @media (min-width: 768px) {
    width: max-content;
    align-self: flex-end;
    margin-bottom: 0;
  }

  @media (min-width: 1440px) {
    justify-self: end;
    align-self: flex-start;
  }
`;

export const SocialLink = styled(Link)``;

export const SocialIcon = styled(Image)``;

export const Copyright = styled.p`
  opacity: 0.6;
  color: #fff;
  font-size: 0.9375rem;
  font-weight: 600;
  line-height: 1.5625rem;

  @media (min-width: 768px) {
    text-align: right;
    align-self: flex-end;
  }
`;
