export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'idTag',
      title: 'ID',
      type: 'string',
      description: 'Please use "-" in place of space',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'title',
      title: 'H1 Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'simpleBlockContent',
    },
    {
      name: 'heroMedia',
      title: 'Hero Media Asset',
      type: 'array',
      of: [{ type: 'illustration' }, { type: 'video' }],
      validation: (Rule) => [Rule.max(1).error('Can only contain 1 media asset')],
    },
    {
      name: 'mediaIsBg',
      tite: 'Is the media asset used as background?',
      type: 'boolean',
    },
    {
      name: 'heroBg',
      title: 'Hero Background Color',
      type: 'color',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: '_type',
    },
  },
};
