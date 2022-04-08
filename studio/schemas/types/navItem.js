import React from 'react';
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
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'icon',
      Title: 'Icon',
      type: 'string',
      description: (
        <>
          Search{' '}
          <a
            href="https://fonts.google.com/icons?selected=Material+Icons"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>{' '}
          for an icon.
        </>
      ),
    },
    {
      name: 'nav',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'flexListingPage' }, { type: 'soloGuidePage' }],
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'isButton',
      type: 'boolean',
      title: 'Is it in the Button Style?',
      initialValue: false,
      validation: (Rule) => [Rule.required().error('Field is required')],
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
