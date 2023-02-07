"use client";

import {
  Clients,
  Directors,
  Footer,
  Header,
  HeroAbout as Hero,
  Ready,
} from "@/components";

const About = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Directors />
      <Clients />
      <Ready />
      <Footer />
    </div>
  );
};

export default About;
