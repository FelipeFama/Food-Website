export default {
  name: 'popular',
  title: 'Popular',
  type: 'document',
  fields: [
    {name: 'span', title: 'Span', type: 'string'},
    {name: 'title', title: 'Title', type: 'string'},
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
  ],
}
