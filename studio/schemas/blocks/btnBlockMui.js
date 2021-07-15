import { BsBootstrap } from 'react-icons/bs';

export default {
  name: 'btnBlockMui',
  title: 'Button - MUI',
  type: 'object',
  icon: BsBootstrap,
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
      name: 'text',
      title: 'Button Text',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'array',
      of: [{ type: 'internalLink' }, { type: 'externalLink' }, { type: 'jumpLink' }],
      validation: (Rule) => Rule.length(1).error('Must contain one item'),
    },
    {
      name: 'btnAlignment',
      title: 'Button Alignment',
      type: 'string',
      options: {
        list: ['left', 'center', 'right'],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'presentation',
      initialValue: 'left',
    },
    {
      name: 'settings',
      title: 'Button Settings',
      type: 'btnSettingsMui',
      fieldset: 'presentation',
    },
    {
      name: 'colors',
      title: 'Color settings',
      type: 'muiColorSet',
      fieldset: 'presentation',
    },
  ],
  preview: {
    select: {
      title: 'text',
    },
  },
};
