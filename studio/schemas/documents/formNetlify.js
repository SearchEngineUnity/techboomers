import { FaWpforms } from 'react-icons/fa';

export default {
  title: 'Form Netlify',
  name: 'formNetlify',
  type: 'document',
  icon: FaWpforms,
  fields: [
    {
      name: 'name',
      title: 'Form name',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'formFields',
      title: 'Form Fields',
      type: 'array',
      of: [
        { type: 'textInput' },
        { type: 'textarea' },
        { type: 'select' },
        { type: 'checkbox' },
        { type: 'radio' },
      ],
    },
    {
      name: 'submitBtn',
      title: 'Submit Button',
      type: 'submitBtn',
    },
    {
      name: 'formFieldStyle',
      title: 'Form Field Style',
      type: 'string',
      options: {
        list: ['normal', 'filled', 'outlined'],
        layout: 'radio',
        direction: 'horizontal',
      },
      initualValue: 'outlined',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};
