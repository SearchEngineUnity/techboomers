export default {
  name: 'rowPlus',
  type: 'object',
  fields: [
    {
      name: 'cells',
      type: 'array',
      of: [{ type: 'tableBlock' }, { type: 'illustration' }],
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
