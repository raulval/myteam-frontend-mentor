import Image from "next/image";
import styled from "styled-components";

export const Container = styled.section``;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 2.5rem;
  color: ${({ theme }) => theme.colors.primary.text};
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 4rem;
    line-height: 3.5rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 1440px) {
    line-height: 6.25rem;
    text-align: left;
    margin-bottom: 1rem;
  }
`;

export const Subtitle = styled.h2`
  margin-bottom: 2.5rem;
  font-weight: 700;
  text-align: center;
  line-height: 3rem;
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
  }

  @media (min-width: 1440px) {
    text-align: left;
    margin-bottom: 2rem;
  }
`;

export const Content = styled.div`
  display: grid;
  row-gap: 1.5rem;

  @media (min-width: 768px) {
    row-gap: 0.5rem;
    max-width: 475px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1440px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ContentImage = styled(Image)`
  margin-right: 1.5rem;
`;

export const ContentText = styled.p`
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.75rem;
  max-width: 22ch;
  color: ${({ theme }) => theme.colors.primary.text};

  @media (min-width: 768px) {
    max-width: 100%;
  }
`;
