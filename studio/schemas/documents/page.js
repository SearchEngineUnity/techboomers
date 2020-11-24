import { MdWeb } from 'react-icons/md';
import * as segments from '../segments';

export default {
  name: 'page',
  type: 'document',
  title: 'Structured Page',
  icon: MdWeb,
  fieldsets: [
    {
      name: 'general',
      title: 'SEO and General Fields',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'social',
      title: 'Social Sharing',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'segments',
      title: 'Segments',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: 'indexing',
      title: 'Indexing',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      name: 'shortName',
      title: 'Short Name',
      type: 'string',
      fieldset: 'general',
      validation: (Rule) => [
        Rule.required().error('Field is required'),
        // add a custom rule for isUnique
      ],
    },
    {
      name: 'title',
      type: 'string',
      title: 'Page Title',
      description: 'Optimal length under 60 characters for Google SERP',
      fieldset: 'general',
      validation: (Rule) => [
        Rule.required().error('Field is required'),
        Rule.max(60).warning('Length over optimal'),
      ],
    },
    {
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      description: 'Optimal length is under 160 characters for Google SERP',
      fieldset: 'general',
      validation: (Rule) => [
        Rule.required().error('Field is require.'),
        Rule.max(160).warning('Length over optimal'),
      ],
    },
    {
      name: 'facebook',
      title: 'Facebook Share',
      type: 'openGraph',
      fieldset: 'social',
    },
    {
      name: 'twitter',
      title: 'Twitter Share',
      type: 'twitterTag',
      fieldset: 'social',
    },
    {
      name: 'segments',
      type: 'array',
      fieldsest: 'segments',
      title: 'Segments',
      of: [
        ...Object.values(segments).map(({ name, title }) => ({
          type: name,
          title,
        })),
      ],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'This page URL will show as domain.com/slug',
      fieldset: 'indexing',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'noindex',
      title: 'Noindex',
      type: 'boolean',
      fieldset: 'indexing',
    },
    {
      name: 'nofollow',
      title: 'Nofollow',
      type: 'boolean',
      fieldset: 'indexing',
    },
    {
      name: 'canonical',
      title: 'Canonical URL',
      type: 'url',
      fieldset: 'indexing',
    },
    {
      name: 'noRobots',
      title: 'Remove from Robots.txt',
      type: 'boolean',
      fieldset: 'indexing',
    },
    {
      name: 'noSitemap',
      title: 'Remove from Sitemap',
      type: 'boolean',
      fieldset: 'indexing',
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      media: 'metaTags.openGraph.image',
    },
    prepare({ title, slug, media }) {
      const currentSlug = slug === '/' ? '/' : `/${slug}`;
      return {
        title,
        subtitle: currentSlug,
        media,
      };
    },
  },
};
