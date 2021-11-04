import { FaWpforms } from 'react-icons/fa';

export default {
  title: 'Block Form Netlify',
  name: 'blockFormNetlify',
  type: 'object',
  icon: FaWpforms,
  fieldsets: [
    {
      name: 'presentation',
      title: 'Presentation Settings',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Form Title',
      type: 'string',
    },
    {
      name: 'formNetlify',
      title: 'Form Netlify',
      type: 'reference',
      to: [
        {
          type: 'formNetlify',
        },
      ],
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'titleAlignment',
      title: 'Title Alignment',
      type: 'string',
      description: 'This only apply to the header above and text.',
      options: {
        list: ['left', 'center', 'right'],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'presentation',
      initialValue: 'left',
    },
    {
      name: 'formStyle',
      title: 'Form Style',
      type: 'reference',
      to: [{ type: 'formStyle' }],
      fieldset: 'presentation',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
