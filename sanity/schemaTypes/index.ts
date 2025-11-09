import type { SchemaTypeDefinition } from "sanity";
import profile from "./profile";
import project from "./project";
import skill from "./skill";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile, project,skill],
};
