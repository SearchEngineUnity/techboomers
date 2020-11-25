export default {
  name: 'category',
  title: 'Cateogry',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Category Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    },
    {
      name: 'metaTags',
      type: 'meta',
      title: 'Meta Tags',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
