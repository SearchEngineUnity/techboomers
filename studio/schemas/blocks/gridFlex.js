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
      name: 'header',
      type: 'header',
      title: 'Header',
    },
    {
      name: 'tiles',
      title: 'Tile Set',
      type: 'array',
      of: [{ type: 'tileInfo' }],
      validation: (Rule) => Rule.min(1).error('Must contain at least 1 item'),
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'sectionSubtitleFooterPT',
    },
    {
      name: 'tileOption',
      title: 'Tile output option',
      type: 'string',
      fieldset: 'presentation',
      options: {
        list: [
          { title: 'Rectangle Image', value: '1' },
          { title: 'Circle Image', value: '2' },
          { title: 'Bordered Rectangle Image then Title', value: '3' },
          { title: 'Bordered Full Image then Title then Text', value: '4' },
          { title: 'Small Image and Title then Text', value: '5' },
        ],
      },
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'layout',
      title: 'Number of tiles in a row',
      description: 'Please enter in the format of value/value/value for desktop/tablet/mobile.',
      type: 'string',
      initialValue: '3/2/1',
      fieldset: 'presentation',
      validation: (Rule) => [Rule.required().error('Field is required')],
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
      validation: (Rule) => [Rule.required().error('Field is required')],
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
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      heading: 'header.heading',
      subheading: 'header.subheading',
      tileOption: 'tileOption',
    },
    prepare({ heading, subheading, tileOption }) {
      switch (tileOption) {
        case '1':
          return { title: heading || subheading || 'Grid Flex', subtitle: 'Grid: Rectangle Image' };
        case '2':
          return { title: heading || subheading || 'Grid Flex', subtitle: 'Grid: Circle Image' };
        case '3':
          return {
            title: heading || subheading || 'Grid Flex',
            subtitle: 'Grid: Bordered Rectangle Image then Title',
          };
        case '4':
          return {
            title: heading || subheading || 'Grid Flex',
            subtitle: 'Grid: Bordered Full Image then Title then Text',
          };
        case '5':
          return {
            title: heading || subheading || 'Grid Flex',
            subtitle: 'Grid: Small Image and Title then Text',
          };
        default:
          return { title: 'Error' };
      }
    },
  },
};
