import HeroTopPattern from "@/assets/bg-patterns/home-hero-desktop.svg";
import HeroPattern from "@/assets/bg-patterns/home-hero.svg";
import {
  HeroSection,
  HeroSpan,
  Pattern1,
  Pattern2,
  Subtitle,
  SubtitleWrapper,
  Title,
  Wrapper,
} from "./styles";

const Hero = () => {
  return (
    <HeroSection>
      <Wrapper>
        <Pattern1 src={HeroTopPattern} alt="Hero top pattern" />
        <Title>
          Find the best <HeroSpan>talent</HeroSpan>
        </Title>
        <SubtitleWrapper>
          <Subtitle>
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </Subtitle>
        </SubtitleWrapper>
        <Pattern2 src={HeroPattern} alt="Hero pattern" />
      </Wrapper>
    </HeroSection>
  );
};

export default Hero;
