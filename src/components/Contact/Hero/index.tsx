import chart from "@/assets/icons/icon-chart.svg";
import cog from "@/assets/icons/icon-cog.svg";
import person from "@/assets/icons/icon-person.svg";
import {
  Container,
  Content,
  ContentImage,
  ContentText,
  Subtitle,
  Title,
  Wrapper,
} from "./styles";

const Hero = () => {
  return (
    <Container>
      <Title>Contact</Title>
      <Subtitle>Ask us about</Subtitle>
      <Content>
        <Wrapper>
          <ContentImage src={person} alt="" />
          <ContentText>The quality of our talent network</ContentText>
        </Wrapper>
        <Wrapper>
          <ContentImage src={cog} alt="" />
          <ContentText>Usage & implementation of our software</ContentText>
        </Wrapper>
        <Wrapper>
          <ContentImage src={chart} alt="" />
          <ContentText>How we help drive innovation</ContentText>
        </Wrapper>
      </Content>
    </Container>
  );
};

export default Hero;
