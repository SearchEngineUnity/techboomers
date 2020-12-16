export default {
  name: 'learningSegment',
  title: 'Learning Segment',
  description: 'Renders a dynamic list segment of the list type selected below',
  type: 'object',
  fields: [
    {
      name: 'idTag',
      title: 'ID',
      type: 'string',
      description: 'Please use "-" in place of space',
      validation: (Rule) => [Rule.required().error('Field is required')],
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
