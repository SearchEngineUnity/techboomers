export default {
  name: 'textBlock',
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
      type: 'text',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'simpleBlockContent',
    },
  ],
  preview: {
    select: {
      title: 'alt',
    },
    prepare({ title, media }) {
      return {
        title: `Alt text: ${title}`,
      };
    },
  },
};
