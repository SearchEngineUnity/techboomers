export default {
  name: 'heroBlock',
  title: 'Text Block',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'heroBlockContent',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
