export default {
  name: 'rowPlus',
  type: 'object',
  fields: [
    {
      name: 'cells',
      type: 'array',
      of: [{ type: 'tableBlock' }, { type: 'illustration' }],
      validation: (Rule) => Rule.length(1).error('Must contain only one item'),
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: `row`,
      };
    },
  },
};
