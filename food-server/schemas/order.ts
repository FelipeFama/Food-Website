export default {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
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
