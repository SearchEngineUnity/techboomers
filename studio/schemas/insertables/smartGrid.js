import { FiGrid } from 'react-icons/fi';

export default {
  name: 'smartGrid',
  title: 'Smart Grid',
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
      name: 'tiles',
      title: 'Tile Set',
      type: 'array',
      of: [
        { type: 'productCardSection' },
        { type: 'illustration' },
        { type: 'smartUnorderedList' },
        { type: 'videoEmbed' },
        { type: 'btnBlockMui' },
      ],
      validation: (Rule) => Rule.min(1).error('Must contain at least 1 item'),
    },
    {
      name: 'layout',
      title: 'Number of tiles in a row',
      description: 'Please enter in the format of value/value/value for desktop/tablet/mobile.',
      type: 'string',
      initialValue: '1/1/1',
      fieldset: 'presentation',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      title: 'Smart Grid',
    },
  },
};
