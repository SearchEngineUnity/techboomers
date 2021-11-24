import { FiLink2 } from 'react-icons/fi';

export default {
  name: 'navItem',
  type: 'object',
  title: 'Navigation Item',
  icon: FiLink2,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'icon',
      Title: 'Icon',
      type: 'string',
      description:
        'Visit https://fonts.google.com/icons?selected=Material+Icons to search for an icon.',
    },
    {
      name: 'nav',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'spGuide' }],
    },
    {
      name: 'isButton',
      type: 'boolean',
      title: 'Is it in the Button Style?',
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'nav.slug.current',
    },
    prepare({ title, slug }) {
      return {
        title,
        subtitle: slug === '/' ? `Links to root` : `Links to /${slug}`,
      };
    },
  },
};
