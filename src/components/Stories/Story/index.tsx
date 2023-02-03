import { Container, Name, Position, Quote, StoryImage } from "./styles";

interface StoryProps {
  quote: string;
  name: string;
  position: string;
  image: string;
}

const Story = ({ quote, name, position, image }: StoryProps) => {
  return (
    <Container>
      <Quote>{quote}</Quote>
      <Name>{name}</Name>
      <Position>{position}</Position>
      <StoryImage src={image} alt="Client image" width={64} height={64} />
    </Container>
  );
};

export default Story;
