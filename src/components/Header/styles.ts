import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface MenuLinkProps {
  isActive?: string;
}

export const Container = styled.header`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 5rem;
`;

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;

  gap: 5rem;
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
`;

export const MenuLinkHome = styled(Link)<MenuLinkProps>`
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) =>
    props.isActive === "home"
      ? props.theme.colors.primary.main
      : props.theme.colors.primary.text};

  text-decoration: ${(props) =>
    props.isActive === "home" ? "2px underline" : "none"};
  text-underline-offset: ${(props) =>
    props.isActive === "home" ? "0.25rem" : "none"};

  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

export const MenuLinkAbout = styled(Link)<MenuLinkProps>`
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) =>
    props.isActive === "about"
      ? props.theme.colors.primary.main
      : props.theme.colors.primary.text};

  text-decoration: ${(props) =>
    props.isActive === "about" ? "2px underline" : "none"};
  text-underline-offset: ${(props) =>
    props.isActive === "about" ? "0.25rem" : "none"};

  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.primary.main};
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
