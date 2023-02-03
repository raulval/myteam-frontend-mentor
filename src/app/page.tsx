"use client";
import Build from "@/components/BuildManage";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
      </Container>
    </ThemeProvider>
  );
}
