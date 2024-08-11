export default {
  name: "steps",
  title: "Steps",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    {
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
    },
  ],
};
