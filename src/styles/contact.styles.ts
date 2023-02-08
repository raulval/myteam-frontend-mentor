import Image from "next/image";
import styled from "styled-components";

export const Container = styled.main`
  overflow: hidden;
  padding-top: 10rem;
  padding-bottom: 5.5rem;

  @media (min-width: 768px) {
    padding-bottom: 7rem;
    padding-top: 14rem;
  }

  @media (min-width: 1440px) {
    padding-top: 15rem;
    padding-bottom: 7.5rem;
  }
`;

export const Content = styled.div`
  margin-inline: auto;
  width: min(100% - 3rem, 375px);
  display: grid;
  position: relative;
  z-index: 0;
  row-gap: 3.5rem;

  @media (min-width: 768px) {
    width: 573px;
    row-gap: 4rem;
  }

  @media (min-width: 1440px) {
    width: 1110px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const Pattern1 = styled(Image)`
  display: none;
  position: absolute;
  z-index: -10;

  @media (min-width: 768px) {
    display: block;
    left: -12.375rem;
    top: 0;
  }

  @media (min-width: 1440px) {
    left: -16.5rem;
  }
`;

export const Pattern2 = styled(Image)`
  position: absolute;
  z-index: -10;
  right: -7.75rem;
  bottom: -12.5rem;

  @media (min-width: 768px) {
    bottom: -7rem;
  }

  @media (min-width: 1440px) {
    right: -16.5rem;
    bottom: -7.5rem;
  }
`;
