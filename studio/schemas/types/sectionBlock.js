import { BsCardText } from 'react-icons/bs';

export default {
  name: 'sectionBlock',
  title: 'Section Block',
  type: 'object',
  icon: BsCardText,
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
      name: 'text',
      title: 'Text',
      type: 'structuredBlockContent',
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
      description: 'This only apply to the header footer above and below the LR blocks.',
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
      description: 'This only apply to the header footer above and below the LR blocks.',
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
      title: 'header.title',
    },
    prepare({ title }) {
      return {
        title: title || 'Section PT Block',
      };
    },
  },
};
