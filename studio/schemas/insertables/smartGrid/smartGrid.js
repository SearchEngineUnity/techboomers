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
        { type: 'productCardGridPtTile' },
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
      name: 'layout',
      title: 'Number of tiles in a row',
      description:
        'Please enter in the format of value/value/value/value/value for desktop/desktop-tablet/tablet/tablet-mobile/mobile. Accepted values are 1, 2, 3, 4, 6, 12.',
      type: 'string',
      initialValue: '3/3/2/2/1',
      fieldset: 'presentation',
      validation: (Rule) => [
        Rule.required().error('Field is required'),
        Rule.regex(
          /^(1|2|3|4|6|12)(\/(1|2|3|4|6|12))(\/(1|2|3|4|6|12))(\/(1|2|3|4|6|12))(\/(1|2|3|4|6|12))$/,
        ).error(
          'Accepted pattern is value/value/value/vale/value. Accepted values are 1, 2, 3, 4, 6, 12.',
        ),
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Smart Grid',
      };
    },
  },
};
