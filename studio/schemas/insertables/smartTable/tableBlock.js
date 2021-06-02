export default {
  title: 'Table Block',
  name: 'tableBlock',
  type: 'object',
  fields: [
    {
      name: 'copy',
      title: 'Cell Content',
      type: 'tableBlockContent',
    },
  ],
  preview: {
    select: {
      title: 'copy',
      subtitle: '_type',
    },
  },
};
