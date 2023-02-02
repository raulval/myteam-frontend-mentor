import {
  Container,
  FeatureDescription,
  FeatureImage,
  FeatureTitle,
} from "./styles";

interface BuildFeatureProps {
  image: string;
  alt: string;
  title: string;
  description: string;
}

const BuildFeature = ({
  image,
  alt,
  title,
  description,
}: BuildFeatureProps) => {
  return (
    <Container>
      <FeatureImage src={image} alt={alt} />
      <div>
        <FeatureTitle>{title}</FeatureTitle>
        <FeatureDescription>{description}</FeatureDescription>
      </div>
    </Container>
  );
};

export default BuildFeature;
