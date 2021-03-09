import { RiPagesLine } from 'react-icons/ri';

export default {
  name: 'spGuide',
  type: 'document',
  title: 'Single Page Guide',
  icon: RiPagesLine,
  fieldsets: [
    {
      name: 'meta',
      title: 'SEO and Social',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'card',
      title: 'Listing Card Fields',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: 'hero',
      title: 'Hero',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: 'mainContent',
      title: 'Main Content',
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
      fieldset: 'meta',
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
      fieldset: 'meta',
      validation: (Rule) => [
        Rule.required().error('Field is require.'),
        Rule.max(160).warning('Length over optimal'),
      ],
    },
    {
      name: 'facebook',
      title: 'Facebook Share',
      type: 'openGraph',
      fieldset: 'meta',
    },
    {
      name: 'twitter',
      title: 'Twitter Share',
      type: 'twitterTag',
      fieldset: 'meta',
    },
    {
      name: 'cardTitle',
      title: 'Card Title',
      type: 'string',
      fieldset: 'card',
    },
    {
      name: 'cardImage',
      title: 'Card Image',
      type: 'illustration',
      fieldset: 'card',
    },
    {
      name: 'h1',
      title: 'H1 Text',
      type: 'string',
      fieldset: 'hero',
      validation: (Rule) => [Rule.required().error('H1 Text is required')],
    },
    {
      name: 'subtitle',
      title: 'Subtitle Text',
      type: 'simpleBlockContent',
      fieldset: 'hero',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'illustration',
      fieldset: 'hero',
    },
    {
      name: 'toc',
      title: 'Table of Content',
      type: 'array',
      of: [{ type: 'tocLink' }],
      fieldset: 'mainContent',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'body',
      type: 'spGuideBlockContent',
      title: 'Body',
      fieldset: 'mainContent',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'This guide URL will show as domain.com/slug',
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
      descritpion: 'currently not functional',
    },
    {
      name: 'noSitemap',
      title: 'Remove from Sitemap',
      type: 'boolean',
      fieldset: 'indexing',
      descritpion: 'currently not functional',
    },
  ],
  preview: {
    select: {
      shortName: 'shortName',
      slug: 'slug.current',
      media: 'cardImage',
    },
    prepare({ shortName, slug, media }) {
      return {
        title: shortName,
        subtitle: `/${slug}`,
        media,
      };
    },
  },
};
