export default {
  name: 'heroBlock',
  title: 'Text Block',
  type: 'object',
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
      type: 'heroHeader',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'heroBlockContent',
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'heroFooterBlockContent',
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
      title: 'header.title',
    },
    prepare({ title }) {
      return {
        title: title || 'Section PT Block',
      };
    },
  },
};
