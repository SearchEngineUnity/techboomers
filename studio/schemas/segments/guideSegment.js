export default {
  name: 'guideSegment',
  title: 'Guide Segment',
  type: 'object',
  fields: [
    {
      name: 'idTag',
      title: 'ID',
      type: 'string',
      description: 'Please use "-" in place of space',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    },
    {
      name: 'col',
      title: 'Number of column(s)',
      type: 'string',
      options: {
        list: [
          { title: '6', value: 'col-lg-2 col-md-4 col-sm-6 col-12' },
          { title: '4', value: 'col-lg-3 col-md-6 col-sm-12' },
          { title: '3', value: 'col-lg-4 col-md-6 col-sm-12' },
          { title: '2', value: 'col-lg-6 col-md-6 col-sm-12' },
          { title: '1', value: 'col-12' },
        ],
      },
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'guide' }] }],
      validation: (Rule) => [Rule.required().error('List must contain at least 1 item')],
    },
    {
      name: 'footer',
      title: 'Footer',
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
