export default {
  name: 'blockSegment',
  title: 'Block Segment',
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
      name: 'content',
      title: 'Content',
      type: 'fullBlockContent',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      title: 'idTag',
      subtitle: '_type',
    },
  },
};
