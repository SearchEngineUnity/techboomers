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
    {
      name: 'type',
      title: 'Heading Type',
      description: ' Type of heading of text in the post',
      type: 'string',
      options: {
        list: [
          { title: 'H2', value: 'h2' },
          { title: 'H3', value: 'h3' },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      header: 'header',
      type: 'type',
    },
    prepare({ title, header, type }) {
      return {
        title,
        subtitle: `${type} - ${header}`,
      };
    },
  },
};
