import patternTop from "@/assets/bg-patterns/bg-pattern-home-4-about-3.svg";
import patternBottom from "@/assets/bg-patterns/bg-pattern-home-5.svg";
import storyData from "@/shared/data/storyData";
import Story from "./Story";
import {
  Container,
  PatternBottom,
  PatternTop,
  Span,
  StoryWrapper,
  Title,
  Wrapper,
} from "./styles";

const Stories = () => {
  const data = storyData;

  return (
    <Container>
      <Wrapper>
        <Title>
          Delivering real results for top companies. Some of our{" "}
          <Span>success stories.</Span>
        </Title>
        <StoryWrapper>
          {data.map((story) => (
            <Story
              key={story.name}
              quote={story.quote}
              name={story.name}
              position={story.position}
              image={story.image}
            />
          ))}
        </StoryWrapper>
        <PatternTop src={patternTop} alt="Pattern" />
        <PatternBottom src={patternBottom} alt="Pattern" />
      </Wrapper>
    </Container>
  );
};

export default Stories;
