import { defineField, defineType } from "sanity";

export default defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    defineField({
      name: "firstName",
      title: "FirstName",
      type: "string",
      validation: (r) => r.required(),
    }),
  ],
});
