export default {
  name: 'sectionColorOverrides',
  type: 'object',
  title: 'Color Overrides',
  fields: [
    {
      name: 'border',
      Title: 'Border Color',
      type: 'color',
    },
    {
      name: 'background',
      Title: 'Background Color',
      type: 'color',
    },
    {
      name: 'foreground',
      Title: 'Foreground Color',
      Description:
        'Color used for all foregrond text. This is overriden by title and subtitle colors if provided.',
      type: 'color',
    },
    {
      name: 'title',
      title: 'Title Color',
      type: 'color',
    },
    {
      name: 'subtitle',
      title: 'Subtitle Color',
      type: 'color',
    },
  ],
};
