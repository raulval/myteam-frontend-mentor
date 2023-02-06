"use client";

import { Build, Footer, Header, Hero, Ready, Stories } from "@/components";

import { Container } from "@/styles/page.styles";

export default function Home() {
  return (
    <Container>
      <Header />
      <Hero />
      <Build />
      <Stories />
      <Ready />
      <Footer />
    </Container>
  );
}
