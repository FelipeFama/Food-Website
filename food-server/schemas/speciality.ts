import { defineField } from "sanity";

export default {
  name: "speciality",
  title: "Speciality",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
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
    defineField({
      name: "icon",
      title: "Icon",
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
