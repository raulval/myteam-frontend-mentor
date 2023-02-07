import pattern from "@/assets/bg-patterns/bg-pattern-about-4.svg";
import {
  ClientImage,
  ClientsWrapper,
  Container,
  Content,
  Pattern,
  Title,
} from "./styles";

const Clients = () => {
  return (
    <Container>
      <Content>
        <Pattern src={pattern} alt="pattern" />
        <Title>Some of our clients</Title>
        <ClientsWrapper>
          <ClientImage
            src="/images/logo-the-verge.png"
            alt="the verge logo"
            width={146.56}
            height={0}
            mdwidth="103px"
            lgwidth="165px"
          />
          <ClientImage
            src="/images/logo-jakarta-post.png"
            alt="the verge logo"
            width={162.21}
            height={0}
            mdwidth="114px"
            lgwidth="184px"
          />
          <ClientImage
            src="/images/logo-the-guardian.png"
            alt="the verge logo"
            width={159.37}
            height={0}
            mdwidth="112px"
            lgwidth="180px"
          />
          <ClientImage
            src="/images/logo-tech-radar.png"
            alt="the verge logo"
            width={146.56}
            height={0}
            mdwidth="103px"
            lgwidth="165px"
          />
          <ClientImage
            src="/images/logo-gadgets-now.png"
            alt="the verge logo"
            width={86.8}
            height={0}
            mdwidth="61px"
            lgwidth="98px"
          />
        </ClientsWrapper>
      </Content>
    </Container>
  );
};

export default Clients;
