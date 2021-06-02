export default {
  name: 'sectionColorOverrides',
  type: 'object',
  title: 'Color Overrides',
  fields: [
    {
      name: 'background',
      title: 'Background Color',
      type: 'color',
      description: 'Changes section background color.',
    },
    {
      name: 'foreground',
      title: 'Foreground Color',
      Description:
        'Color used for all foregrond text. This is overriden by title and subtitle colors if provided.',
      type: 'color',
      description:
        'Changes section text and decorative element color. Overrides primary text color.',
    },
    {
      name: 'heading',
      title: 'Heading Color',
      type: 'color',
      description:
        'Changes heading text and decorative element color. Will override above foreground color.',
    },
    {
      name: 'subtitle',
      title: 'Subtitle Color',
      type: 'color',
      description:
        'Changes subtitle text and decorative element color. Will override above foreground color.',
    },
    {
      name: 'footer',
      title: 'Footer Color',
      type: 'color',
      description:
        'Changes footer text and decorative element color. Will override above foreground color.',
    },
    {
      name: 'link',
      title: 'Link Color',
      type: 'color',
      description: 'Changes link text for all states. Will override default primary color.',
    },
  ],
};
