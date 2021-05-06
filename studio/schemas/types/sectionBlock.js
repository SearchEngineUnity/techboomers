export default {
  name: 'sectionBlock',
  title: 'Section Block',
  type: 'object',
  fields: [
    {
      name: 'header',
      title: 'Header',
      type: 'header',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'structuredBlockContent',
    },
  ],
  preview: {
    select: {
      title: 'header.title',
    },
    prepare({ title }) {
      return {
        title: title || 'Section PT Block',
      };
    },
  },
};
