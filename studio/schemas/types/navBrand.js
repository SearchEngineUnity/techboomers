export default {
  name: 'navBrand',
  type: 'object',
  title: 'Navigation Brand Item',
  fields: [
    {
      name: 'brand',
      title: 'Brand',
      type: 'reference',
      to: [{ type: 'companyLogo' }],
    },
    {
      name: 'nav',
      type: 'reference',
      to: [{ type: 'page' }],
    },
  ],
  preview: {
    select: {
      title: 'brand.title',
      subtitle: 'nav.slug.current',
      media: 'brand.logo',
    },
  },
};
