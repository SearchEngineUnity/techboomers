export default {
  name: 'navBrand',
  type: 'object',
  title: 'Navigation Brand Group',
  fields: [
    {
      name: 'brandGroup',
      title: 'Brand Group',
      type: 'array',
      of: [{ type: 'brandItem' }],
    },
    {
      name: 'nav',
      type: 'reference',
      to: [{ type: 'page' }],
    },
  ],
  preview: {
    select: {
      subtitle: 'nav.slug.current',
    },
    prepare({ subtitle }) {
      return {
        title: 'Nav Brand Group',
        subtitle,
      };
    },
  },
};
