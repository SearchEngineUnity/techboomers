import { HiOutlineColorSwatch } from 'react-icons/hi';

export default {
  name: 'sectionColorSet',
  type: 'document',
  title: 'Section Color Set',
  icon: HiOutlineColorSwatch,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'background',
      title: 'Background Color',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    },
    {
      name: 'bgImage',
      title: 'Background Image',
      type: 'image',
      description: 'Background Image will overlay on top of Background Color.',
    },
    {
      name: 'bleed',
      title: 'Set Background to Full Bleed',
      description:
        'This setting is only applicable to desktop. All smaller screen will be default small',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'foreground',
      title: 'Foreground Color',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    },
    {
      name: 'link',
      title: 'Link Color',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    },
    {
      name: 'heading',
      title: 'Heading Color',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    },
    {
      name: 'subtitle',
      title: 'Subtitle Color',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    },
    {
      name: 'footer',
      title: 'Footer Color',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};
