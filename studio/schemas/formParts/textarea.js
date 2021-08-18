export default {
  name: 'textarea',
  type: 'object',
  title: 'Textarea',
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
      name: 'rows',
      title: 'Number of rows of text',
      type: 'number',
      validation: (Rule) => [Rule.required().error('Field is required')],
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
