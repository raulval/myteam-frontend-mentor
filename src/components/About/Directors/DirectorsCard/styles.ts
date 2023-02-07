import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface CardProps {
  $flipped?: boolean;
}

export const Container = styled.div<CardProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary.main};
  height: 253px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  animation: ${(props) =>
    props.$flipped
      ? "flip-vertical-right 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both"
      : "flip-vertical-left 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both"};

  @media (min-width: 1440px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @keyframes flip-vertical-right {
    0% {
      transform: rotateY(0);
    }
    100% {
      transform: rotateY(180deg);
    }
  }

  @keyframes flip-vertical-left {
    0% {
      transform: rotateY(180deg);
    }
    100% {
      transform: rotateY(0);
    }
  }
`;

export const ProfileImage = styled(Image)`
  margin-top: 1.875rem;
  margin-bottom: 0.875rem;
  border-radius: 9999px;
  border: 2px solid #c4fffe;
`;

export const Name = styled.h3`
  color: ${({ theme }) => theme.colors.secondary.text};
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.75rem;
`;

export const Role = styled.p`
  color: ${({ theme }) => theme.colors.primary.text};
  font-style: italic;
  font-weight: 500;
`;

export const NameFlipped = styled.h3<CardProps>`
  display: inline-block;
  color: ${({ theme }) => theme.colors.secondary.text};
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-top: 2.1875rem;
  margin-bottom: 0.5rem;
  transform: ${(props) => props.$flipped && "rotateY(-180deg)"};
`;

export const Quote = styled.p<CardProps>`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary.text};
  transform: ${(props) => props.$flipped && "rotateY(-180deg)"};
`;

export const SocialsWrapper = styled.div<CardProps>`
  display: grid;
  column-gap: 1rem;
  grid-auto-flow: column;
  transform: ${(props) => props.$flipped && "rotateY(-180deg)"};
`;

export const SocialLink = styled(Link)`
  transition: all 300ms;

  .icon path {
    transition: all 300ms;
  }

  &:hover,
  &:focus {
    color: #f67e7e;

    .icon path {
      fill: #f67e7e;
    }
  }
`;

export const SocialIcon = styled(Image)``;

export const MoreInfoButton = styled.button<CardProps>`
  display: flex;
  position: absolute;
  right: 0;
  left: 0;
  bottom: -1.75rem;
  width: 3.5rem;
  height: 3.5rem;
  background-color: ${(props) =>
    props.$flipped
      ? props.theme.colors.secondary.text
      : props.theme.colors.primary.main};
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  border-radius: 9999px;
  transition-duration: 300ms;

  &:hover {
    background-color: ${(props) =>
      props.$flipped
        ? props.theme.colors.primary.main
        : props.theme.colors.secondary.text};
  }
`;

export const MoreInfoIcon = styled(Image)<CardProps>`
  animation: ${(props) =>
    props.$flipped
      ? "close-info 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both"
      : "open-info 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both"};

  @keyframes close-info {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(225deg);
    }
  }

  @keyframes open-info {
    0% {
      transform: rotate(225deg);
    }
    100% {
      transform: rotate(0);
    }
  }
`;
