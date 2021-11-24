import { MdPlaylistAdd } from 'react-icons/md';

export default {
  name: 'smartList',
  title: 'Smart List',
  type: 'object',
  icon: MdPlaylistAdd,
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: ['ordered', 'unordered'],
      },
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'listItems',
      title: 'List Items',
      type: 'array',
      of: [{ type: 'smartListItem' }],
      validation: (Rule) => Rule.min(1).error('Must contain at least one item'),
    },
  ],
  preview: {
    select: {
      type: 'type',
    },
    prepare({ type }) {
      return {
        title: 'Smart list',
        subtitle: type,
      };
    },
  },
};
