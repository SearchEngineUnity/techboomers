import { FaWpforms } from 'react-icons/fa';

export default {
  title: 'Form',
  name: 'form',
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
      name: 'header',
      title: 'Header',
      type: 'header',
    },
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
      name: 'footer',
      title: 'Footer',
      type: 'subtitleFooterBlockContent',
    },
    {
      name: 'headerAlignment',
      title: 'Header Text Alignment',
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
      name: 'footerAlignment',
      title: 'Footer Text Alignment',
      type: 'string',
      description: 'This only apply to the footer below text.',
      options: {
        list: ['left', 'center', 'right'],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'presentation',
      initialValue: 'left',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};
