"use client";
import Header from "@/components/Header";
import { GlobalStyle } from "@/styles/globals";
import Theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";

export default function Home() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}
