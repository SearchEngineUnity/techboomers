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
      slug: 'nav.slug.current',
    },
    prepare({ slug }) {
      return {
        title: 'Nav Brand Group',
        subtitle: slug === '/' ? `Links to root` : `Links to /${slug}`,
      };
    },
  },
};
