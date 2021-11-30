export default {
  title: 'Twitter Open Graph (Meta Tags)',
  name: 'metaTwitter',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Optimal length is under 70 characters',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      description: 'Optimal length is under 200 characters with a max of 420 characters.',
    },
    {
      title: 'Image',
      description: 'Twitter recommends aspect ratio of 2:1 with a minimum dimension of 300x157px',
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
