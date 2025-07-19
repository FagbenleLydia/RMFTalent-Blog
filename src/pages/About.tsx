import TeamShowcase from "../components/TeamShowcase";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import ContactForm from "../components/ContactForm";
import AboutInfo from "../components/AboutInfo";
import OurStory from "../components/OurStory";
import VideoSection from "../components/VideoSection";
import OurValues from "../components/OurValues";
import TestimonialSection from "../components/TestimonialSection";

const About = () => {
  return (
    <>
      <AboutInfo />
      <OurStory />
      <VideoSection />
      <OurValues />
      <TeamShowcase />
      <Testimonials />
      <TestimonialSection />
      <CTA />
      <ContactForm />
    </>
  );
};

export default About;
