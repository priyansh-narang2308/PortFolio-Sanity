import AboutSection from "./sections/about-section";
import EducationSection from "./sections/education-section";
import ExperienceSection from "./sections/experience-section";
import HeroSection from "./sections/hero-section";
import SkillSection from "./sections/skill-section";
import TestimonialSection from "./sections/testimonial-section";

const PortfolioContent = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TestimonialSection />
      <SkillSection />
      <ExperienceSection />
      <EducationSection/>
    </>
  );
};

export default PortfolioContent;
