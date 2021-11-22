import { ImBooks } from 'react-icons/im';

export default {
  name: 'listingSection',
  title: 'Listing Section',
  type: 'object',
  icon: ImBooks,
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
      name: 'idTag',
      title: 'ID',
      type: 'string',
      description: 'Please only use alphanumeric characters and hypen',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'listType',
      title: 'List Type',
      type: 'string',
      options: {
        list: ['SPG', 'MCG'],
      },
    },
    {
      name: 'header',
      type: 'header',
      title: 'Header',
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'subtitleFooterBlockContent',
    },
    {
      name: 'count',
      type: 'number',
      title: 'Count',
      fieldset: 'presentation',
      description: 'Number of tiles per page',
      validation: (Rule) => Rule.integer(),
      initialValue: 12,
    },
    {
      name: 'headerAlignment',
      title: 'Header Text Alignment',
      type: 'string',
      description: 'This only apply to the header above the LR blocks.',
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
      description: 'This only apply to the footer below the LR blocks.',
      options: {
        list: ['left', 'center', 'right'],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'presentation',
      initialValue: 'left',
    },
    {
      name: 'colorSettings',
      title: 'Color Settings',
      type: 'reference',
      to: [{ type: 'sectionColorSet' }],
      fieldset: 'presentation',
    },
  ],
  preview: {
    select: {
      subtitle: '_type',
      id: 'idTag',
    },
    prepare({ id, subtitle }) {
      return {
        subtitle,
        title: `ID: ${id}`,
      };
    },
  },
};
