export default {
  name: 'brandItem',
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
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Desktop', value: 'desktop' },
          { title: 'Tablet', value: 'tablet' },
          { title: 'Mobile', value: 'mobile' },
        ],
      },
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      title: 'type',
      media: 'brand.logo',
    },
  },
};
