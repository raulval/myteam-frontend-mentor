"use client";
import patternTop from "@/assets/bg-patterns/bg-pattern-about-2-contact-1.svg";
import patternBottom from "@/assets/bg-patterns/bg-pattern-contact-2.svg";
import { Footer, Form, Header, HeroContact } from "@/components";
import {
  Container,
  Content,
  Pattern1,
  Pattern2,
} from "@/styles/contact.styles";

const Contact = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <HeroContact />
          <Form />
          <Pattern1 src={patternTop} alt="pattern" />
          <Pattern2 src={patternBottom} alt="pattern" />
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
