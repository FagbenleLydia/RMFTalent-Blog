import React from "react";
import Hero from "../components/Hero";
import TrustIndicators from "../components/TrustIndicators";
import ValueProposition from "../components/ValueProposition";
import Process from "../components/Process";
import TeamShowcase from "../components/TeamShowcase";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <ValueProposition />
      <Process />
      <TeamShowcase />
      <Testimonials />
      <Blog />
      <FAQ />
      <CTA />
      <ContactForm />
    </>
  );
};

export default Home;
