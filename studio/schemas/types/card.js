export default {
  name: 'card',
  title: 'Card',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'cardImage',
      title: 'Illustration',
      type: 'illustration',
    },
    {
      name: 'btnText',
      title: 'CTA Button Text',
      type: 'string',
    },
    {
      name: 'cardLink',
      title: 'Link',
      type: 'linkSet',
      description: 'The first link will apply',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
