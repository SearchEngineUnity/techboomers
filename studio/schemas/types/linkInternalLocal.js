export default {
  title: 'Internal Local Link',
  name: 'internalLocal',
  type: 'object',
  fields: [
    {
      name: 'reference',
      type: 'reference',
      title: 'Reference',
      to: [{ type: 'page' }, { type: 'spGuide' }, { type: 'listingPage' }],
    },
    {
      name: 'hashId',
      title: 'Hash Id',
      type: 'string',
      description: 'Please enter the ID of the segment you would like to jump to',
    },
    {
      name: 'parameter',
      title: 'Parameter(s)',
      type: 'string',
      description: 'Please enter all needed parameters for the link',
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
      id: 'hashId',
      parameter: 'parameter',
    },
    prepare({ link, id, parameter }) {
      return {
        title: `/${link}${id ? `#${id}` : ''}${parameter ? `?${parameter}` : ''}`,
      };
    },
  },
};
