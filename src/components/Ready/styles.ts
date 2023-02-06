import Image from "next/image";
import styled from "styled-components";

export const Container = styled.section`
  padding-top: 5.25rem;
  padding-bottom: 5.25rem;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.primary.main};

  @media (min-width: 768px) {
    padding-top: 4.75rem;
    padding-bottom: 4.75rem;
  }
`;

export const Content = styled.div`
  margin-inline: auto;
  width: min(100% - 3rem, 375px);
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;
  text-align: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 573px;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 1440px) {
    max-width: 917px;
    width: 1110px;
  }
`;

export const Text = styled.h2`
  max-width: 12ch;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2rem;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.colors.secondary.main};

  @media (min-width: 768px) {
    margin-bottom: 0;
    max-width: 100%;
  }

  @media (min-width: 1440px) {
    font-size: 3rem;
    line-height: 3rem;
  }
`;

export const ContactButton = styled.button`
  width: 8.9rem;
  height: 3.1rem;
  border: 2px solid ${(props) => props.theme.colors.secondary.main};
  border-radius: 24px;
  color: ${(props) => props.theme.colors.secondary.main};
  font-size: 15px;
  font-weight: 600;
  padding: 9px 32px 11px;
  background-color: transparent;
  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary.main};
    color: #ffff;
  }
`;

export const Pattern = styled(Image)`
  position: absolute;
  z-index: -10;
  left: -1.5rem;
  bottom: -6.5625rem;

  @media (min-width: 768px) {
    top: 0;
    left: -6.125rem;
  }

  @media (min-width: 1440px) {
    left: -16.5rem;
    bottom: -4.75rem;
    top: unset;
  }
`;
