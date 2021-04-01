export default {
  name: 'illustration',
  title: 'Illustration',
  type: 'image',
  options: {
    hotspot: true, // <-- Defaults to false
    storeOriginalFilename: true,
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alt',
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
    {
      name: 'height',
      type: 'number',
      title: 'Image height',
      description: `You can enter a height % of vh. If the image's native height is smaller it will be used instead.`,
      validation: (Rule) => Rule.integer(),
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
    {
      name: 'caption',
      type: 'text',
      title: 'Caption',
    },
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'asset',
    },
    prepare({ title, media }) {
      return {
        title: `Alt text: ${title}`,
        media,
      };
    },
  },
};
