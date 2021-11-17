import { FiGrid } from 'react-icons/fi';

export default {
  name: 'gridFlex',
  title: 'Grid - Flex',
  type: 'object',
  icon: FiGrid,
  fields: [
    {
      name: 'layout',
      title: 'Number of tiles in a row',
      description: 'Please enter in the format of value/value/value for desktop/tablet/mobile.',
      type: 'string',
    },
    {
      name: 'tiles',
      title: 'Tile Set',
      type: 'array',
      of: [{ type: 'tileInfo' }],
      validation: (Rule) => Rule.min(1).error('Must contain at least 1 item'),
    },
    {
      name: 'tileOption',
      title: 'Tile output option',
      type: 'string',
      options: {
        list: [
          { title: 'image-only-rectangle/square', value: '1' },
          { title: 'image-only-circle', value: '2' },
          { title: 'image-title-border', value: '3' },
          { title: 'image-title-text-base', value: '4' },
        ],
      },
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      subtitle: '_type',
    },
    prepare({ subtitle }) {
      return {
        subtitle,
        title: `Grid`,
      };
    },
  },
};
