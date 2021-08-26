export default {
  name: 'checkbox',
  type: 'object',
  title: 'Checkbox',
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
      type: 'array',
      of: [{ type: 'option' }],
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

// id for select (add '-label' for use as input label)
// input label - string
// value = the same as name of input field
// array for options with label and value for each option
