export default {
  name: 'testImage',
  title: 'Test Image',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
        storeOriginalFilename: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
