import { BsCardImage } from 'react-icons/bs';

export default {
  name: 'clickableImage',
  title: 'Clickable Image',
  type: 'object',
  icon: BsCardImage,
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
      name: 'image',
      type: 'tileImage',
      title: 'Image',
    },
    {
      name: 'href',
      title: 'URL',
      type: 'url',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'alignment',
      title: 'Alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'flex-start' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'flex-end' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'presentation',
      initialValue: 'flex-start',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'borderRadius',
      title: 'Border radius',
      type: 'string',
      fieldset: 'presentation',
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
