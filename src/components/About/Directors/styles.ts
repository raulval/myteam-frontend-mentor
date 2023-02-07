import Image from "next/image";
import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.terciary.main};
  padding-top: 5.5rem;
  padding-bottom: 7.25rem;
  overflow: hidden;

  @media (min-width: 768px) {
    padding-top: 6.25rem;
    padding-bottom: 8rem;
  }

  @media (min-width: 1440px) {
    padding-top: 8.75rem;
    padding-bottom: 10.5rem;
  }
`;

export const Content = styled.div`
  margin-inline: auto;
  width: min(100% - 3rem, 375px);
  position: relative;
  z-index: 0;
  text-align: center;

  @media (min-width: 768px) {
    width: 573px;
  }

  @media (min-width: 1440px) {
    width: 1110px;
  }
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.primary.text};
  font-weight: 700;
  font-size: 2rem;
  line-height: 2rem;
  margin-bottom: 3rem;

  @media (min-width: 1440px) {
    margin-bottom: 4rem;
    font-size: 3rem;
    line-height: 3rem;
  }
`;

export const DirectorsWrapper = styled.div`
  display: grid;
  row-gap: 3.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 4.75rem;
    column-gap: 0.75rem;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 1.875rem;
  }
`;

export const Pattern1 = styled(Image)`
  position: absolute;
  z-index: -10;
  top: -11.75rem;
  left: -7.75rem;

  @media (min-width: 768px) {
    top: -6.25rem;
    left: -12.375rem;
  }

  @media (min-width: 1440px) {
    top: -8.75rem;
    left: -16.5rem;
  }
`;

export const Pattern2 = styled(Image)`
  position: absolute;
  z-index: -10;
  bottom: -7.25rem;
  right: -1.5rem;

  @media (min-width: 768px) {
    bottom: -8rem;
    right: -6.125rem;
  }

  @media (min-width: 1440px) {
    bottom: -10.5rem;
    right: -10.25rem;
  }
`;
