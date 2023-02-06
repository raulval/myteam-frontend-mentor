import pattern from "@/assets/bg-patterns/bg-pattern-home-6-about-5.svg";
import { ContactButton, Container, Content, Pattern, Text } from "./styles";

const Ready = () => {
  return (
    <Container>
      <Content>
        <Text>Ready to get started?</Text>
        <ContactButton>contact us</ContactButton>
        <Pattern src={pattern} alt="Pattern" />
      </Content>
    </Container>
  );
};

export default Ready;
