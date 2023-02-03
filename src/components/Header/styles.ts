import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface HeaderProps {
  isactive?: string;
  extendNavbar?: boolean;
}

export const Container = styled.header<HeaderProps>`
  display: flex;
  width: 100vw;
  height: 5rem;
  position: fixed;
  top: 0;
  z-index: 50;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.background};
`;

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;

  gap: 5rem;

  @media (max-width: 768px) {
    gap: 0;
  }
`;

export const Logo = styled(Image)``;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 45vw;
`;

export const MenuLinkWrapper = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuLinkHome = styled(Link)<HeaderProps>`
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) =>
    props.isactive === "home"
      ? props.theme.colors.primary.main
      : props.theme.colors.primary.text};

  text-decoration: ${(props) =>
    props.isactive === "home" ? "2px underline" : "none"};
  text-underline-offset: ${(props) =>
    props.isactive === "home" ? "0.25rem" : "none"};

  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

export const MenuLinkAbout = styled(Link)<HeaderProps>`
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) =>
    props.isactive === "about"
      ? props.theme.colors.primary.main
      : props.theme.colors.primary.text};

  text-decoration: ${(props) =>
    props.isactive === "about" ? "2px underline" : "none"};
  text-underline-offset: ${(props) =>
    props.isactive === "about" ? "0.25rem" : "none"};

  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

export const ContactButtonWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContactButton = styled.button`
  width: 8.9rem;
  height: 3.1rem;
  border: 2px solid #ffffff;
  border-radius: 24px;
  color: ${(props) => props.theme.colors.primary.text};
  font-size: 15px;
  font-weight: 600;
  padding: 9px 32px 11px;
  background-color: transparent;
  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #ffffff;
    color: ${(props) => props.theme.colors.secondary.main};
  }
`;

export const Hamburger = styled.button<HeaderProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 23px;
  right: 30px;
  z-index: 20;
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.primary.text};
  font-size: 38px;
  cursor: pointer;
  justify-content: space-around;
  flex-flow: column nowrap;

  @media (min-width: 769px) {
    display: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${(props) => props.theme.colors.primary.text};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ extendNavbar }) =>
        extendNavbar ? "rotate(43deg)" : "rotate(0)"};
    }
    &:nth-child(2) {
      transform: ${({ extendNavbar }) =>
        extendNavbar ? "translateX(-100%)" : "translateX(0)"};
      opacity: ${({ extendNavbar }) => (extendNavbar ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ extendNavbar }) =>
        extendNavbar ? "rotate(-43deg)" : "rotate(0)"};
    }
  }
`;

export const MobileMenu = styled.div<HeaderProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondary.main};
  position: fixed;
  transform: ${({ extendNavbar }) =>
    extendNavbar ? "translateX(0)" : "translateX(100%)"};
  top: 0;
  right: 0;
  height: 100vh;
  width: 230px;
  padding-top: 5rem;
  gap: 2rem;
  transition: transform 0.3s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }

  @media (min-width: 425px) {
    width: 300px;
  }
`;
