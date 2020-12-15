import { RiPagesLine } from 'react-icons/ri';
import sanityClient from 'part:@sanity/base/client';

export default {
  name: 'guide',
  type: 'document',
  title: 'Guide',
  icon: RiPagesLine,
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
      name: 'isChapter',
      title: 'Is this an MP guide chapter?',
      type: 'boolean',
      fieldset: 'general',
    },
    {
      name: 'parentGuide',
      title: 'Please link to the MP Guide parent if this is a chapter',
      type: 'reference',
      to: [{ type: 'mpGuide' }],
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
      name: 'toc',
      title: 'Table of Content',
      type: 'array',
      of: [{ type: 'tocLink' }],
      fieldset: 'mainContent',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'body',
      type: 'fullBlockContent',
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
      shortName: 'shortName',
      slug: 'slug.current',
      media: 'heroImage.mainImage.image',
      isChapter: 'isChapter',
    },
    prepare({ shortName, slug, media, isChapter }) {
      const mp = isChapter ? 'MP - ' : '';
      return {
        title: `${mp}${shortName}`,
        subtitle: `/${slug}`,
        media,
      };
    },
  },
};

// import sanityClient from 'part:@sanity/base/client'
// import slugify from 'some-off-the-shelf-slugifier'

// function myAsyncSlugifier(input, type) {
//   const slug = slugify(input)
//   const query = 'count(*[_type=="movie" && slug.current == $slug]{_id})'
//   const params = {slug: slug}
//   return sanityClient.fetch(query, params).then(count => {
//     console.log('Movies with identical slug', count)
//     return `${slug}-${count + 1}`
//   })
// }

// //…
// // schema field
// {
//   title: 'Slug',
//   name: 'slug',
//   type: 'slug',
//   options: {
//     source: 'title',
//     slugify: myAsyncSlugifier
//   }
// }
