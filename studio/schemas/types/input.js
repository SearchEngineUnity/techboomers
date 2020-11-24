export default {
  name: 'input',
  type: 'object',
  title: 'Input',
  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Label',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },

    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'Give one word that describes this field ',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'inputType',
      title: 'Input Type',
      type: 'string',
      options: {
        list: ['text', 'email', 'tel'],
      },
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'placeholder',
      type: 'string',
      title: 'Placeholder',
      description: 'This populates the example within the input box',
    },
    {
      name: 'required',
      title: 'Is this information required?',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      title: 'label',
    },
  },
};
