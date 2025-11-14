import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "groq";

// Defining the groq query first to fetch from cms
const HERO_SECTION_QUERY = defineQuery(`
  *[_id == "singleton-profile"][0]{
    firstName,
    lastName,
    headline,
    headlineStaticText,
    headlineAnimatedWords,
    headlineAnimationDuration,
    shortBio,
    email,
    phone,
    location,
    availability,
    socialLinks,
    yearsOfExperience,
    profileImage
  }
`);

const HeroSection =async () => {
  const { data: profile } = await sanityFetch({ query: HERO_SECTION_QUERY });

  console.log(profile)

  return <div>HeroSection</div>;
};

export default HeroSection;
