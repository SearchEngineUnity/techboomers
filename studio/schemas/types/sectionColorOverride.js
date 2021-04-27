export default {
  name: 'sectionColorOverride',
  type: 'object',
  title: 'Color Override',
  fields: [
    {
      name: 'title',
      title: 'Title Color',
      type: 'color',
    },
    {
      name: 'body',
      Title: 'Boxy text color',
      type: 'color',
    },
    {
      name: 'nav',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'spGuide' }],
    },
    {
      name: 'isButton',
      type: 'boolean',
      title: 'Is it in the Button Style?',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'nav.slug.current',
    },
  },
};
