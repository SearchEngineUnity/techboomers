export default {
  name: 'lrHero',
  title: 'LR - Hero',
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
      name: 'blocks',
      type: 'array',
      title: 'Blocks',
      description: 'Please pick a maximum of two. The first item will appear left in layout.',
      of: [{ type: 'textBlock' }, { type: 'illustration' }],
      validation: (Rule) => Rule.length(2).error('Must contain two items'),
    },
    {
      name: 'layout',
      type: 'string',
      title: 'Layout',
      options: {
        list: ['7:5', '3:1', '2:1', '1:1', '1:2', '1:3'],
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: '_type',
    },
  },
};
