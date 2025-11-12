import type { SchemaTypeDefinition } from "sanity";
import profile from "./profile";
import project from "./project";
import skill from "./skill";
import experience from "./experience";
import education from "./education";
import certificstion from "./certificstion";
import blog from "./blog";
import testimonial from "./testimonial";
import contact from "./contact";
import navigation from "./navigation";
import siteSettings from "./siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    profile,
    project,
    skill,
    experience,
    education,
    certificstion,
    blog,
    testimonial,
    contact,
    navigation,
    siteSettings,
  ],
};
