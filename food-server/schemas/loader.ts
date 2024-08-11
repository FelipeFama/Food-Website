import { defineField } from "sanity";

export default {
  name: "loader",
  title: "Loader",
  type: "document",
  fields: [
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
