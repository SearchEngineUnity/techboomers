export default {
  name: 'tocLink',
  type: 'object',
  title: 'ToC Menu Item',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description:
        'This is the menu item text that will appear in the Table of Contents it can be different text then the H2 itself. All H2s on page will be listed on the table of contents. Please ensure that all H2 items are also added with hash ids.',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
