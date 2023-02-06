import Image from "next/image";
import styled from "styled-components";

export const Container = styled.section`
  background-color: ${(props) => props.theme.colors.secondary.main};
  padding-top: 4rem;
  padding-bottom: 4rem;

  @media (min-width: 768px) {
    padding-top: 6.25rem;
    padding-bottom: 6.25rem;
  }

  @media (min-width: 1440px) {
    padding-top: 8.75rem;
    padding-bottom: 8.75rem;
  }
`;

export const Content = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  z-index: 0;
  margin-inline: auto;
  width: min(100% - 3rem, 375px);

  @media (min-width: 768px) {
    width: 573px;
  }

  @media (min-width: 1440px) {
    display: grid;
    width: 1110px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const TitleWrapper = styled.div`
  ::before {
    display: block;
    content: "";
    width: 3.125rem;
    background-color: ${(props) => props.theme.colors.primary.main};
    height: 0.25rem;
  }
`;

export const Title = styled.h2`
  max-width: 15rem;
  margin-top: 2rem;
  margin-bottom: 3.5rem;
  color: ${(props) => props.theme.colors.primary.text};
  font-weight: 700;
  font-size: 2rem;
  line-height: 2rem;

  @media (min-width: 768px) {
    max-width: 445px;
    margin-bottom: 4rem;
  }

  @media (min-width: 1440px) {
    font-size: 3rem;
    line-height: 3rem;
    margin-top: 3.375rem;
  }
`;

export const FeaturesWrapper = styled.div`
  display: grid;
  row-gap: 3rem;

  @media (min-width: 768px) {
    row-gap: 2rem;
  }

  @media (min-width: 1440px) {
    width: 540px;
    margin-top: 3.625rem;
    justify-self: end;
  }
`;

export const Pattern = styled(Image)`
  position: absolute;
  top: -4rem;
  right: -7.75rem;
  z-index: -10;

  @media (min-width: 768px) {
    top: -6.25rem;
    right: -12.375rem;
  }

  @media (min-width: 1440px) {
    bottom: -8.75rem;
    top: unset;
    right: -16.5625rem;
  }
`;
