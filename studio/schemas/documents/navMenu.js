import { FiNavigation2 } from 'react-icons/fi';

export default {
  name: 'navMenu',
  title: 'Navigation Menu',
  type: 'document',
  icon: FiNavigation2,
  fields: [
    {
      name: 'title',
      Title: 'Title',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'menu',
      title: 'Menu',
      type: 'array',
      description: 'Use Navigation Item for single link and Group for bundled links',
      of: [
        {
          type: 'navBrand',
        },
        {
          type: 'navItem',
        },
        {
          type: 'navGroup',
        },
        {
          type: 'navJumpLink',
        },
      ],
      validation: (Rule) => Rule.min(1).error('Must contain one item'),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
