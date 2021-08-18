import { FaWpforms } from 'react-icons/fa';

export default {
  title: 'Form',
  name: 'form',
  type: 'object',
  icon: FaWpforms,
  fields: [
    {
      name: 'name',
      title: 'Form name',
      type: 'string',
    },
    {
      name: 'formFields',
      title: 'Form Fields',
      type: 'array',
      of: [{ type: 'input' }, { type: 'textarea' }],
    },
    {
      name: 'submitBtn',
      title: 'Submit Button',
      type: 'btnBlockMui',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};
