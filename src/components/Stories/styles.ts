import Image from "next/image";
import styled from "styled-components";

export const Container = styled.section`
  padding-top: 8.75rem;
  padding-bottom: 10.25rem;

  @media (min-width: 768px) {
    padding-top: 6.25rem;
    padding-bottom: 6.25rem;
  }

  @media (min-width: 1440px) {
    padding-top: 8.75rem;
    padding-bottom: 8.75rem;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  z-index: 0;
  text-align: center;

  margin-inline: auto;
  width: min(100% - 3rem, 375px);

  @media (min-width: 768px) {
    width: 573px;
  }

  @media (min-width: 1440px) {
    width: 1110px;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 2rem;
  line-height: 2rem;
  max-width: 327px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
  color: ${(props) => props.theme.colors.primary.text};

  @media (min-width: 768px) {
    max-width: 100%;
  }

  @media (min-width: 1440px) {
    font-size: 3rem;
    line-height: 3rem;
    margin-bottom: 3.5rem;
    max-width: 32ch;
  }
`;

export const Span = styled.span`
  color: ${(props) => props.theme.colors.secondary.text};
`;

export const StoryWrapper = styled.div`
  display: grid;
  row-gap: 3rem;

  @media (min-width: 1440px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 1.875rem;
  }
`;

export const PatternTop = styled(Image)`
  position: absolute;
  z-index: -10;
  top: -8.75rem;
  left: -1.5rem;

  @media (min-width: 768px) {
    top: -6.25rem;
    left: -6.125rem;
  }

  @media (min-width: 1440px) {
    top: -8.75rem;
    left: -10.3125rem;
  }
`;

export const PatternBottom = styled(Image)`
  position: absolute;
  z-index: -10;
  bottom: -10.25rem;
  right: -1.5rem;

  @media (min-width: 768px) {
    bottom: -6.25rem;
    right: -6.125rem;
  }

  @media (min-width: 1440px) {
    bottom: -8.75rem;
    right: -10.3125rem;
  }
`;
