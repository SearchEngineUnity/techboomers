export default {
  name: 'tocLink',
  type: 'object',
  title: 'ToC Menu Item',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'This is the menu item text that will appear in the ToC.',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
