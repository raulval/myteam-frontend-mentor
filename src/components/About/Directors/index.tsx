import patternTop from "@/assets/bg-patterns/bg-pattern-about-2-contact-1.svg";
import patternBottom from "@/assets/bg-patterns/bg-pattern-home-4-about-3.svg";
import directorsData from "@/shared/data/directorsData";
import DirectorsCard from "./DirectorsCard";
import {
  Container,
  Content,
  DirectorsWrapper,
  Pattern1,
  Pattern2,
  Title,
} from "./styles";

const Directors = () => {
  const data = directorsData;

  return (
    <Container>
      <Content>
        <Title>Meet the directors</Title>
        <DirectorsWrapper>
          {data.map((director) => {
            return (
              <DirectorsCard
                key={director.name}
                image={director.image}
                name={director.name}
                role={director.role}
                quote={director.quote}
                twitter={director.twitter}
                linkedin={director.linkedin}
              />
            );
          })}
        </DirectorsWrapper>
        <Pattern1 src={patternTop} alt="pattern" />
        <Pattern2 src={patternBottom} alt="pattern" />
      </Content>
    </Container>
  );
};

export default Directors;
