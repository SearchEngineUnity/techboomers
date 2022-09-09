import { FiGrid } from 'react-icons/fi';

export default {
  name: 'smartGridBlock',
  title: 'Smart Grid Block',
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
      of: [
        { type: 'smartGridPtTile' },
        { type: 'illustration' },
        { type: 'smartUnorderedList' },
        { type: 'videoEmbed' },
        { type: 'btnBlockMui' },
        { type: 'clickableImage' },
      ],
      validation: (Rule) => Rule.min(1).error('Must contain at least 1 item'),
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'sectionSubtitleFooterPT',
    },
    {
      name: 'layout',
      title: 'Number of tiles in a row',
      description:
        'Please enter in the format of value/value/value/value/value for desktop/desktop-tablet/tablet/tablet-mobile/mobile. Accepted values are 1, 2, 3, 4, 6, 12.',
      type: 'string',
      initialValue: '3/3/2/2/1',
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
    },
    prepare({ heading, subheading }) {
      return {
        title: heading || subheading || 'Smart Grid Block',
        subtitle: heading && subheading,
      };
    },
  },
};
