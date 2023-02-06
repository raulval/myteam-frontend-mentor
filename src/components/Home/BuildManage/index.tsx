import pattern from "@/assets/bg-patterns/bg-pattern-home-3.svg";
import chart from "@/assets/icons/icon-chart.svg";
import cog from "@/assets/icons/icon-cog.svg";
import person from "@/assets/icons/icon-person.svg";
import BuildFeature from "./BuildFeature";
import {
  Container,
  Content,
  FeaturesWrapper,
  Pattern,
  Title,
  TitleWrapper,
} from "./styles";

const Build = () => {
  return (
    <Container>
      <Content>
        <TitleWrapper>
          <Title>Build & manage distributed teams like no one else.</Title>
        </TitleWrapper>
        <FeaturesWrapper>
          <BuildFeature
            image={person}
            alt="Person icon"
            title="Experienced Individuals"
            description="Our network is made up of highly experienced professionals who are passionate about what they do."
          />
          <BuildFeature
            image={cog}
            alt="Engine icon"
            title="Easy to Implement"
            description="Our processes have been refined over years of implementation meaning 
            our teams always deliver."
          />
          <BuildFeature
            image={chart}
            alt="Chart icon"
            title="Enhanced Productivity"
            description="Our customized platform with in-built analytics helps you manage your 
            distributed teams."
          />
        </FeaturesWrapper>
        <Pattern src={pattern} alt="pattern" />
      </Content>
    </Container>
  );
};

export default Build;
