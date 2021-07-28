export default {
  title: 'Internal Link',
  name: 'internalLink',
  type: 'object',
  fields: [
    {
      name: 'reference',
      type: 'reference',
      title: 'Reference',
      to: [{ type: 'page' }, { type: 'spGuide' }, { type: 'listingPage' }],
    },
    {
      name: 'internalHash',
      title: 'Hash Id',
      type: 'string',
      description: 'Please enter the ID of the segment you would like to jump to',
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
      id: 'internalHash',
    },
    prepare({ link, id }) {
      return {
        title: id ? `/${link}#${id}` : `/${link}`,
      };
    },
  },
};
