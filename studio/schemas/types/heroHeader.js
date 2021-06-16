export default {
  name: 'heroHeader',
  title: 'Header',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'heroSubtitleBlockContent',
    },
  ],
};
