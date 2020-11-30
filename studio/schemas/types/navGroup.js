export default {
  name: 'navGroup',
  type: 'object',
  title: 'Navigation Group',
  fields: [
    {
      name: 'nav',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'mpGuide' }, { type: 'guide' }],
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
      title: 'nav.title',
      subtitle: 'nav.slug.current',
    },
  },
};
