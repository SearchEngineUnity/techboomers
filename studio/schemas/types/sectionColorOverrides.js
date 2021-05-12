export default {
  name: 'sectionColorOverrides',
  type: 'object',
  title: 'Color Overrides',
  fields: [
    {
      name: 'background',
      title: 'Background Color',
      type: 'color',
    },
    {
      name: 'foreground',
      title: 'Foreground Color',
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
    {
      name: 'footer',
      title: 'Footer Color',
      type: 'color',
    },
    {
      name: 'link',
      title: 'Link Color',
      type: 'color',
    },
  ],
};
