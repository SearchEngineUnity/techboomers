import { CgQuoteO } from 'react-icons/cg';

export default {
  name: 'testimonialSection',
  title: 'Testimonial Section',
  type: 'object',
  icon: CgQuoteO,
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
      validation: (Rule) => [Rule.required().error('Field is required')],
      description:
        'Add ID to the selected string. Please only use alphanumeric characters and hypen.',
    },
    {
      name: 'header',
      type: 'header',
      title: 'Header',
    },
    {
      name: 'blocks',
      type: 'array',
      title: 'Testimonial Blocks',
      of: [{ type: 'testimonial' }],
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'sectionSubtitleFooterPT',
    },
    {
      name: 'tileOption',
      title: 'Testimonial output option',
      type: 'string',
      fieldset: 'presentation',
      options: {
        list: [
          { title: 'Testimonial with Image', value: '1' },
          { title: 'Plain Testimonial', value: '2' },
        ],
      },
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'layout',
      title: 'Number of tiles in a row',
      description: 'Please enter in the format of value/value/value for desktop/tablet/mobile.',
      type: 'string',
      initialValue: '3/2/1',
      fieldset: 'presentation',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'blockAlignment',
      title: 'Block Alignment',
      type: 'string',
      description: 'This determines how the L and R blocks align to each other.',
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
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'headerAlignment',
      title: 'Header Text Alignment',
      type: 'string',
      description: 'This only apply to the header above the LR blocks.',
      options: {
        list: ['left', 'center', 'right'],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'presentation',
      initialValue: 'left',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'footerAlignment',
      title: 'Footer Text Alignment',
      type: 'string',
      description: 'This only apply to the footer below the LR blocks.',
      options: {
        list: ['left', 'center', 'right'],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'presentation',
      initialValue: 'left',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'designSettings',
      title: 'Design Settings',
      type: 'reference',
      to: [{ type: 'sectionDesignSet' }],
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
