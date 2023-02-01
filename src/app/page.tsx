"use client";
import { GlobalStyle } from "@/styles/globals";
import Theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";

export default function Home() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}
