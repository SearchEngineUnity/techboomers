import { FaRegImages } from 'react-icons/fa';

export default {
  name: 'navBrand',
  type: 'object',
  title: 'Navigation Brand Group',
  icon: FaRegImages,
  fields: [
    {
      name: 'brandGroup',
      title: 'Brand Group',
      type: 'array',
      of: [{ type: 'brandItem' }],
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'nav',
      type: 'reference',
      to: [{ type: 'page' }],
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'alt',
      title: 'Alt for Brand Image',
      type: 'string',
    },
  ],
  preview: {
    select: {
      slug: 'nav.slug.current',
    },
    prepare({ slug }) {
      return {
        title: 'Nav Brand Group',
        subtitle: slug === '/' ? `Links to root` : `Links to /${slug}`,
      };
    },
  },
};
