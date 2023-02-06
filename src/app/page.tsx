"use client";
import Build from "@/components/BuildManage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ready from "@/components/Ready";
import Stories from "@/components/Stories";
import { GlobalStyle } from "@/styles/globals";
import { Container } from "@/styles/page.styles";
import Theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";

export default function Home() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Container>
        <Header />
        <Hero />
        <Build />
        <Stories />
        <Ready />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
