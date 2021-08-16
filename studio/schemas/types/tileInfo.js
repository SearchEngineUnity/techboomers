export default {
  name: 'tileInfo',
  title: 'Tile - Information Content',
  type: 'object',
  fieldsets: [
    {
      name: 'presentation',
      title: 'Presentation Settings',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      name: 'tileImage',
      title: 'Illustration',
      type: 'illustration',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
    },
    {
      name: 'link',
      title: 'Tile link',
      type: 'array',
      of: [
        { type: 'internalLocal' },
        { type: 'internalGlobal' },
        { type: 'externalLink' },
        { type: 'jumpLink' },
      ],
      validation: (Rule) => Rule.length(1).error('Must contain one item'),
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'tileImage.asset',
    },
    prepare({ media, title }) {
      return {
        title: title || `tile`,
        media,
      };
    },
  },
};
