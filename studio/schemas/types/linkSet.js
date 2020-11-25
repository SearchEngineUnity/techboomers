export default {
  name: 'linkSet',
  title: 'Link Set',
  type: 'object',
  fields: [
    {
      name: 'internalLink',
      title: 'Internal Link',
      type: 'internalLink',
    },
    {
      name: 'externalLink',
      title: 'External Link',
      type: 'externalLink',
    },
  ],
};
