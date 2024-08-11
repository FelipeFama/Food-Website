import { defineField } from "sanity";

export default {
  name: "popular",
  title: "Popular",
  type: "document",
  fields: [
    defineField({
      name: "span",
      title: "Span",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    }),
  ],
};
