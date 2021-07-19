export default {
  name: 'tileMui',
  title: 'Tile - Mui',
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
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
    },
    {
      name: 'tileImage',
      title: 'Illustration',
      type: 'illustration',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'array',
      of: [{ type: 'internalLink' }, { type: 'externalLink' }, { type: 'jumpLink' }],
      validation: (Rule) => Rule.length(1).error('Must contain one item'),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
