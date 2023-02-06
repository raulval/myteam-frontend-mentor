"use client";
import { GlobalStyle } from "@/styles/globals";
import Theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
