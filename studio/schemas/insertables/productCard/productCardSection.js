export default {
  title: 'Product Card Section',
  name: 'productCardSection',
  type: 'object',
  fields: [
    {
      name: 'content',
      title: 'Section Content',
      type: 'productCardPT',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Product Card Section',
      };
    },
  },
};
