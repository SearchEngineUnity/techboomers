export default {
  name: 'muiBtnColorSet',
  title: 'Mui Color Set',
  type: 'object',
  fields: [
    {
      name: 'main',
      title: 'Main Color',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'dark',
      title: 'Hover Color',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'contrastText',
      title: 'Text Color',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
};
