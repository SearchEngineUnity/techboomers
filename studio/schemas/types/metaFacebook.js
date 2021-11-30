export default {
  title: 'Facebook Open Graph (Meta Tags)',
  name: 'metaFacebook',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Optimal length is under 55 characters. Max recommended is 95 or under',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      description: 'Optimal length is 55 characters. Max recommended is 200 or under',
    },
    {
      title: 'Image',
      description: 'Facebook recommends 1200x630',
      name: 'image',
      type: 'image',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
