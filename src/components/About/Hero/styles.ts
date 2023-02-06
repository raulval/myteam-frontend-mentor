import Image from "next/image";
import styled from "styled-components";

export const Container = styled.section`
  overflow: hidden;
  padding-top: 10rem;

  @media (min-width: 768px) {
    padding-top: 14rem;
  }

  @media (min-width: 1440px) {
    padding-top: 15rem;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 0;
  margin-inline: auto;
  width: min(100% - 3rem, 375px);
  text-align: center;
  padding-bottom: 6.75rem;

  @media (min-width: 768px) {
    width: 573px;
    padding-bottom: 7rem;
  }

  @media (min-width: 1440px) {
    width: 1110px;
    display: flex;
    justify-content: space-between;
    text-align: left;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 2.5rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.primary.text};

  @media (min-width: 768px) {
    font-size: 4rem;
    line-height: 3.5rem;
    margin-bottom: 1.5rem;
  }
  @media (min-width: 1440px) {
    line-height: 6.25rem;
  }
`;

export const SubtitleWrapper = styled.div`
  ::before {
    content: "";
    height: 0.25rem;
    width: 3.125rem;
    margin-bottom: 2.5rem;
    background: ${(props) => props.theme.colors.primary.main};

    @media (min-width: 1440px) {
      display: block;
      max-width: 750px;
    }
  }
`;

export const Subtitle = styled.p`
  max-width: 457px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.75rem;
  color: ${(props) => props.theme.colors.primary.text};

  @media (min-width: 1440px) {
    max-width: 730px;
    margin-left: 0;
    margin-right: 0;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;

export const Pattern = styled(Image)`
  position: absolute;
  z-index: -10;
  bottom: -6.25rem;
  right: -7.75rem;

  @media (min-width: 768px) {
    bottom: 0;
    right: -12.375rem;
  }

  @media (min-width: 1440px) {
    right: -16.5rem;
  }
`;
