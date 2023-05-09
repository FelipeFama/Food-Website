export default {
  name: 'speciality',
  title: 'Speciality',
  type: 'document',
  fields: [
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
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'description', title: 'Description', type: 'text'},
  ],
}
