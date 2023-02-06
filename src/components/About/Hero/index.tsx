import pattern from "@/assets/bg-patterns/nav.svg";
import {
  Container,
  Content,
  Pattern,
  Subtitle,
  SubtitleWrapper,
  Title,
} from "./styles";

const Hero = () => {
  return (
    <Container>
      <Content>
        <Title>About</Title>
        <SubtitleWrapper>
          <Subtitle>
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We’ll bring those teams to you.
          </Subtitle>
        </SubtitleWrapper>
        <Pattern src={pattern} alt="Pattern" />
      </Content>
    </Container>
  );
};

export default Hero;
