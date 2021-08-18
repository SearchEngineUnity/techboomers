export default {
  name: 'option',
  type: 'object',
  title: 'Option',
  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Label',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'value',
      title: 'Value',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'label',
    },
  },
};
