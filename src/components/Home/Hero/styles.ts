import Image from "next/image";
import styled from "styled-components";

export const HeroSection = styled.section`
  display: flex;
  padding-top: 160px;

  @media (min-width: 768px) {
    padding-top: 224px;
  }

  @media (min-width: 1440px) {
    padding-top: 250px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-bottom: 12.3125rem;
  margin-inline: auto;
  width: min(100% - 3rem, 375px);

  @media (min-width: 768px) {
    padding-bottom: 16rem;
    width: 573px;
  }

  @media (min-width: 1440px) {
    padding-bottom: 15.625rem;
    flex-direction: row;
    justify-content: space-between;
    width: 1110px;
  }
`;

export const Pattern1 = styled(Image)`
  display: none;
  position: absolute;
  top: 0;
  left: -16.5625rem;

  @media (min-width: 1440px) {
    display: block;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary.text};
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 2.5rem;
  margin-bottom: 1.125rem;

  @media (min-width: 768px) {
    max-width: 10ch;
    margin-bottom: 1.5rem;
    font-size: 4rem;
    line-height: 3.5rem;
  }

  @media (min-width: 1440px) {
    text-align: left;
    margin-bottom: 0;
    font-size: 6.25rem;
    line-height: 6.25rem;
  }
`;

export const HeroSpan = styled.span`
  color: ${(props) => props.theme.colors.primary.main};
`;

export const SubtitleWrapper = styled.div`
  ::before {
    display: none;
    content: "";
    height: 0.25rem;
    width: 3.125rem;
    margin-bottom: 5rem;
    background: ${(props) => props.theme.colors.secondary.text};

    @media (min-width: 1440px) {
      display: block;
    }
  }
`;

export const Subtitle = styled.p`
  line-height: 1.75rem;
  color: ${(props) => props.theme.colors.primary.text};

  @media (min-width: 768px) {
    max-width: 28.5625rem;
  }

  @media (min-width: 1440px) {
    text-align: left;
    font-size: 1.125rem;
    width: 27.8125rem;
  }
`;

export const Pattern2 = styled(Image)`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1440px) {
    left: unset;
  }
`;
