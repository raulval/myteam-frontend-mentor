import Image from "next/image";
import styled from "styled-components";

interface ClientImageProps {
  mdwidth: string;
  lgwidth: string;
}

export const Container = styled.section`
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.secondary.main};
  padding-top: 5.5rem;
  padding-bottom: 5.5rem;

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
  position: relative;
  z-index: 0;
  margin-inline: auto;
  width: calc(100% - 3rem);

  @media (min-width: 768px) {
    width: 689px;
  }

  @media (min-width: 1440px) {
    width: 1110px;
  }
`;

export const Pattern = styled(Image)`
  position: absolute;
  z-index: -10;
  top: -11.75rem;
  left: -7.75rem;

  @media (min-width: 768px) {
    top: -12.5rem;
    left: -2.5rem;
  }

  @media (min-width: 1440px) {
    top: -8.75rem;
    left: -10.25rem;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  line-height: 2rem;
  margin-bottom: 4rem;
  text-align: center;
  color: ${(props) => props.theme.colors.primary.text};

  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }

  @media (min-width: 1440px) {
    font-size: 3rem;
    line-height: 3rem;
    margin-bottom: 4rem;
  }
`;

export const ClientsWrapper = styled.div`
  display: grid;
  row-gap: 4rem;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ClientImage = styled(Image)<ClientImageProps>`
  margin-left: auto;
  margin-right: auto;
  height: auto;

  @media (min-width: 768px) {
    width: ${(props) => props.mdwidth};
  }

  @media (min-width: 1440px) {
    width: ${(props) => props.lgwidth};
  }
`;
