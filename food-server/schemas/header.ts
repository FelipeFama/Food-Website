import { defineField } from "sanity";

export default {
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    defineField({
      name: "link",
      title: "Link",
      type: "string",
    }),
    defineField({
      name: "span",
      title: "Span",
      type: "string",
    }),
  ],
};
