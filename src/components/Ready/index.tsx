import pattern from "@/assets/bg-patterns/bg-pattern-home-6-about-5.svg";
import { useRouter } from "next/navigation";
import { ContactButton, Container, Content, Pattern, Text } from "./styles";

const Ready = () => {
  const router = useRouter();

  return (
    <Container>
      <Content>
        <Text>Ready to get started?</Text>
        <ContactButton onClick={() => router.push("/contact-us")}>
          contact us
        </ContactButton>
        <Pattern src={pattern} alt="Pattern" />
      </Content>
    </Container>
  );
};

export default Ready;
