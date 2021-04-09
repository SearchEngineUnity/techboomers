export default {
  name: 'navGroup',
  type: 'object',
  title: 'Navigation Group',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'icon',
      Title: 'Icon',
      type: 'string',
      description:
        'Visit https://fonts.google.com/icons?selected=Material+Icons to search for an icon.',
    },
    {
      name: 'nav',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'spGuide' }],
    },
    {
      title: 'Group',
      name: 'group',
      type: 'array',
      of: [{ type: 'navItem' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'nav.slug.current',
    },
  },
};
