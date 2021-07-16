export default {
  title: 'Internal Link',
  name: 'internalLink',
  type: 'object',
  fields: [
    {
      name: 'reference',
      type: 'reference',
      title: 'Reference',
      to: [{ type: 'page' }, { type: 'spGuide' }],
    },
  ],
  preview: {
    select: {
      link: 'reference.slug.current',
    },
    prepare({ link }) {
      return {
        title: `/${link}`,
      };
    },
  },
};
