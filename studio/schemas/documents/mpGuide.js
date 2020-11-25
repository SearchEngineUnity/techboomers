import { FaBook } from 'react-icons/fa';

export default {
  name: 'mpGuide',
  type: 'document',
  title: 'MP Guide',
  icon: FaBook,
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
      name: 'featuredImages',
      title: 'Featured Images',
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
      name: 'mainContent',
      title: 'Main Content',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: 'chapters',
      title: 'Chapters',
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
      name: 'h1',
      title: 'H1 Text',
      type: 'string',
      fieldset: 'general',
      validation: (Rule) => [Rule.required().error('H1 Text is required')],
    },
    {
      name: 'subtitle',
      title: 'Subtitle Text',
      type: 'string',
      fieldset: 'general',
    },
    {
      name: 'breadcrumb',
      title: 'Breadcrumb Text',
      type: 'string',
      fieldset: 'general',
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
      name: 'excerpt',
      title: 'Excerpt',
      type: 'excerpt',
      fieldset: 'general',
    },
    {
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{ type: 'person' }],
      fieldset: 'general',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'displayDate',
      title: 'Display date',
      type: 'datetime',
      fieldset: 'general',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
      fieldset: 'general',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'imageSet',
      fieldset: 'featuredImages',
    },
    {
      name: 'cardImage',
      title: 'Card Image',
      type: 'imageSet',
      fieldset: 'featuredImages',
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
      name: 'body',
      type: 'fullBlockContent',
      title: 'Body',
      fieldset: 'mainContent',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'chapters',
      title: 'List',
      fieldset: 'chapters',
      type: 'array',
      of: [{ type: 'chapter' }],
      validation: (Rule) => [Rule.required().error('List must contain at least 1 item')],
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
      title: 'shortName',
      slug: 'slug.current',
      media: 'heroImage.mainImage.image',
    },
    prepare({ title, slug, media }) {
      return {
        title,
        subtitle: `/${slug}`,
        media,
      };
    },
  },
};
