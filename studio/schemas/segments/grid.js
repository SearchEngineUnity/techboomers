export default {
  name: 'grid',
  title: 'Grid',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Segment Title',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'subTitle',
      title: 'Segment Subtitle',
      type: 'string',
    },
    {
      name: 'design',
      title: 'Card Design',
      type: 'string',
      options: {
        list: [
          { title: 'Image + Title + Clickable', value: '1' },
          { title: 'Image + Title + Non-Clickable', value: '2' },
        ],
      },
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'col',
      title: 'Number of column(s)',
      type: 'string',
      options: {
        list: ['6', '4', '3', '2', '1'],
      },
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{ type: 'card' }],
      validation: (Rule) => [Rule.required().error('List must contain at least 1 item')],
    },
    {
      name: 'footer',
      title: 'Segment footer',
      type: 'simpleBlockContent',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: '_type',
    },
  },
};
