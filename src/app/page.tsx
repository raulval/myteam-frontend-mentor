"use client";
import Build from "@/components/BuildManage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ready from "@/components/Ready";
import Stories from "@/components/Stories";
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
