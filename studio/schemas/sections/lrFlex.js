import { SiAdobelightroomclassic } from 'react-icons/si';

export default {
  name: 'lrFlex',
  title: 'LR - Flex',
  type: 'object',
  icon: SiAdobelightroomclassic,
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
      name: 'idTag',
      title: 'ID',
      type: 'string',
      description: 'Please use "-" in place of space',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'header',
      type: 'header',
      title: 'Header',
    },
    {
      name: 'blocks',
      type: 'array',
      title: 'Blocks',
      description: 'Please pick a maximum of two. The first item will appear left in layout.',
      of: [{ type: 'sectionBlock' }, { type: 'imageBlock' }, { type: 'videoBlock' }],
      validation: (Rule) => Rule.length(2).error('Must contain two items'),
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'subtitleFooterBlockContent',
    },
    {
      name: 'layout',
      type: 'string',
      title: 'Layout',
      fieldset: 'presentation',
      options: {
        list: [
          { title: '5:1', value: '10:2' },
          { title: '3:1', value: '9:3' },
          { title: '2:1', value: '8:4' },
          { title: '7:5', value: '7:5' },
          { title: '1:1', value: '6:6' },
          { title: '5:7', value: '5:7' },
          { title: '1:2', value: '4:8' },
          { title: '1:3', value: '3:9' },
          { title: '1:5', value: '2:10' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: '6:6',
    },
    {
      name: 'reverseOrder',
      type: 'boolean',
      title: 'Reverse order on stacking?',
      fieldset: 'presentation',
      initialValue: false,
    },
    {
      name: 'blockAlignment',
      title: 'Block Alignment',
      type: 'string',
      description: 'This only apply to the header footer above and below the LR blocks.',
      options: {
        list: [
          { title: 'Top', value: 'flex-start' },
          { title: 'Center', value: 'center' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'presentation',
      initialValue: 'center',
    },
    {
      name: 'headerAlignment',
      title: 'Header Text Alignment',
      type: 'string',
      description: 'This only apply to the header footer above and below the LR blocks.',
      options: {
        list: ['left', 'center', 'right'],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'presentation',
      initialValue: 'left',
    },
    {
      name: 'footerAlignment',
      title: 'Footer Text Alignment',
      type: 'string',
      description: 'This only apply to the header footer above and below the LR blocks.',
      options: {
        list: ['left', 'center', 'right'],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'presentation',
      initialValue: 'left',
    },
    {
      name: 'colorOverrides',
      type: 'sectionColorOverrides',
      title: 'Color Overrides',
      fieldset: 'presentation',
    },
  ],
  preview: {
    select: {
      subtitle: '_type',
      id: 'idTag',
    },
    prepare({ id, subtitle }) {
      return {
        subtitle,
        title: `ID: ${id}`,
      };
    },
  },
};
