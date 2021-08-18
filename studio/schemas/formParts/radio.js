export default {
  name: 'radio',
  type: 'object',
  title: 'Radio',
  fields: [
    {
      name: 'id',
      type: 'string',
      title: 'Id Tag',
      description: 'Give one string to identify this field',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'label',
      type: 'string',
      title: 'Label',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'helperText',
      title: 'Helper Text',
      type: 'string',
    },
    {
      name: 'options',
      title: 'Options',
      type: 'option',
    },
    {
      name: 'required',
      title: 'Is this information required?',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'label',
    },
  },
};
