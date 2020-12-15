export default {
  name: 'learningSegment',
  title: 'Learning Segment',
  description: 'Renders a dynamic list segment of the list type selected below',
  type: 'object',
  fields: [
    {
      title: 'Filters',
      name: 'filters',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Learning List Segment`,
      };
    },
  },
};
