"use client";

import {
  Clients,
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
      <Clients />
      <Ready />
      <Footer />
    </div>
  );
};

export default About;
