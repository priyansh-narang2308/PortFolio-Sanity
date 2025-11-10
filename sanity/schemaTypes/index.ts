import type { SchemaTypeDefinition } from "sanity";
import profile from "./profile";
import project from "./project";
import skill from "./skill";
import experience from "./experience";
import education from "./education";
import certificstion from "./certificstion";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile, project, skill, experience, education, certificstion],
};
