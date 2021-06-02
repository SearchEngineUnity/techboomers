import { BiHeading } from 'react-icons/bi';

export default {
  name: 'lrHero',
  title: 'LR - Hero',
  type: 'object',
  icon: BiHeading,
  fields: [
    {
      name: 'idTag',
      title: 'ID',
      type: 'string',
      description: 'Please only use alphanumeric characters and hypen',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'blocks',
      type: 'array',
      title: 'Blocks',
      description: 'Please pick a maximum of two. The first item will appear left in layout.',
      of: [{ type: 'heroBlock' }, { type: 'illustration' }, { type: 'videoBlock' }],
      validation: (Rule) => Rule.length(2).error('Must contain two items'),
    },
    {
      name: 'layout',
      type: 'string',
      title: 'Layout',
      options: {
        list: [
          { title: '5:1', value: '10:2' },
          { title: '7:5', value: '7:5' },
          { title: '3:1', value: '9:3' },
          { title: '2:1', value: '8:4' },
          { title: '1:1', value: '6:6' },
          { title: '1:2', value: '4:8' },
          { title: '1:3', value: '3:9' },
          { title: '5:7', value: '5:7' },
          { title: '1:5', value: '2:10' },
        ],
      },
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
