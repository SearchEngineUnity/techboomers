export default {
  name: 'sectionBlock',
  title: 'Section Block',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'simpleBlockContent',
    },
  ],
  preview: {
    prepare() {
      return {
        title: `Section Block`,
      };
    },
  },
};
