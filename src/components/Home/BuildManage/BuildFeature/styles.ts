import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    align-items: start;
  }
`;

export const FeatureImage = styled(Image)`
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 1.5rem;
  }
`;

export const FeatureTitle = styled.h2`
  margin-bottom: 0.5rem;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: ${(props) => props.theme.colors.primary.main};

  @media (min-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const FeatureDescription = styled.p`
  max-width: 20.4375rem;
  opacity: 0.8;
  color: ${(props) => props.theme.colors.primary.text};

  @media (min-width: 768px) {
    max-width: 100%;
  }
`;
