import { FiNavigation2 } from 'react-icons/fi';

export default {
  name: 'navMenu',
  title: 'Navigation Menu',
  type: 'document',
  icon: FiNavigation2,
  fields: [
    {
      name: 'type',
      Title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Main Navigation', value: 'mainNav' },
          { title: 'Main Footer', value: 'mainFooter' },
        ],
      },
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'menuArray',
      title: 'Menu',
      type: 'array',
      description: 'Use Navigation Item for single link and Group for bundled links',
      of: [
        {
          type: 'navSet',
        },
      ],
      validation: (Rule) => Rule.min(1).error('Must contain one item'),
    },
  ],
  preview: {
    select: {
      title: 'type',
    },
    prepare({ title }) {
      return {
        title,
      };
    },
  },
};
