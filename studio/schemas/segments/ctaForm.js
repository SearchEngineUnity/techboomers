export default {
  name: 'ctaForm',
  title: 'CTA Form',
  type: 'object',
  fields: [
    {
      name: 'idTag',
      title: 'ID',
      type: 'string',
      description: 'Please use "-" in place of space',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    },
    {
      name: 'disclaimer',
      title: 'Disclaimer',
      type: 'simpleBlockContent',
    },
    {
      name: 'form',
      title: 'Form builder',
      type: 'form',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: '_type',
    },
  },
};
