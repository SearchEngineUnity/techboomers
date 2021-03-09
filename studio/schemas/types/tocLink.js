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
    {
      name: 'header',
      title: 'Heading Text',
      type: 'string',
      description: 'This is the heading text in the post. (Needs to be exact)',
    },
  ],
  preview: {
    select: {
      title: 'title',
      header: 'header',
    },
    prepare({ title, header }) {
      return {
        title,
        subtitle: header,
      };
    },
  },
};
