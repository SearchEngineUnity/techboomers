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
    {
      title: 'Open in new tab?',
      name: 'newTab',
      type: 'boolean',
      initialValue: false,
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
