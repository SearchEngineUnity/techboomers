export default {
  name: 'heroHeader',
  title: 'Hero Header',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'H1 Heading (Heading)',
      type: 'string',
    },
    {
      name: 'subheading',
      title: 'H2 Heading (Subheading)',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'heroSubtitlePT',
    },
  ],
};
