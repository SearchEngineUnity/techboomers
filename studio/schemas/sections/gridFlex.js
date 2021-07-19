import { FiGrid } from 'react-icons/fi';

export default {
  name: 'gridFlex',
  title: 'Grid - Flex',
  type: 'object',
  icon: FiGrid,
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
      name: 'header',
      type: 'header',
      title: 'Header',
    },
    {
      name: 'tiles',
      title: 'Tile Set',
      type: 'array',
      of: [{ type: 'tileMui' }],
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'subtitleFooterBlockContent',
    },
    {
      name: 'layout',
      type: 'string',
      title: 'Layout',
      fieldset: 'presentation',
      description:
        'Choose the number of tiles in a row. The three values are tile numbers for desktop/table/mobile.',
      options: {
        list: [
          { title: '6/4/2', value: '6/4/2' },
          { title: '4/2/1', value: '4/2/1' },
          { title: '3/2/1', value: '3/2/1' },
          { title: '2/2/1', value: '2/2/1' },
        ],
      },
      initialValue: '3/2/1',
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
