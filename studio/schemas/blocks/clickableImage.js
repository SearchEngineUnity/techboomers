import { BsCardImage } from 'react-icons/bs';

export default {
  name: 'clickableImage',
  title: 'Clickable Image',
  type: 'object',
  icon: BsCardImage,
  options: {
    hotspot: true, // <-- Defaults to false
    storeOriginalFilename: true,
  },
  fields: [
    {
      name: 'image',
      type: 'tileImage',
      title: 'Image',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
    {
      name: 'borderRadius',
      title: 'Border radius',
      type: 'string',
      initialValue: '0px',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      title: 'image.alt',
      media: 'image.asset',
    },
    prepare({ title, media }) {
      return {
        title,
        media,
        subtitle: 'Clickable Image',
      };
    },
  },
};
