import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "groq";
import SkillChart from "../skill-chart";

const SKILL_QUERY =
  defineQuery(`*[_type=="skill"] | order(category asc, order asc){
    name,
    category,
    proficiency,
    percentage,
    yearsOfExperience,
    color
  }`);

const SkillSection = async () => {
  const { data: skills } = await sanityFetch({ query: SKILL_QUERY });

  if (!skills || skills.length === 0) {
    return null;
  }

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical proficiences and tools I
            work with daily
          </p>
        </div>
      <SkillChart skills={skills}/>
      </div>

    </section>
  );
};

export default SkillSection;
