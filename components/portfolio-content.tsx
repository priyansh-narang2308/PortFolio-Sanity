import AboutSection from "./sections/about-section";
import Certificationsection from "./sections/certification-section";
import EducationSection from "./sections/education-section";
import ExperienceSection from "./sections/experience-section";
import HeroSection from "./sections/hero-section";
import ProjectsSection from "./sections/project-section";
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
      <EducationSection />
      <ProjectsSection />
      <Certificationsection/>
    </>
  );
};

export default PortfolioContent;
