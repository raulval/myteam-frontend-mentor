import iconQuote from "@/assets/icons/icon-quotes.svg";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  padding-top: 2.25rem;
  background-image: url(${iconQuote.src});
  background-position: top;
  background-repeat: no-repeat;
`;

export const Quote = styled.p`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.primary.text};

  @media (min-width: 1440px) {
    margin-bottom: 1.5rem;
  }
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-bottom: 0.125rem;
  color: ${(props) => props.theme.colors.secondary.text};
`;

export const Position = styled.p`
  font-size: 0.8125rem;
  line-height: 1.125rem;
  font-weight: 500;
  font-style: italic;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.primary.text};

  @media (min-width: 1440px) {
    margin-bottom: 2rem;
  }
`;

export const StoryImage = styled(Image)`
  /* width: 4rem;
  height: 4rem; */
  border-radius: 100px;
  border: 2px solid ${(props) => props.theme.colors.secondary.text};
  margin-left: auto;
  margin-right: auto;
`;
