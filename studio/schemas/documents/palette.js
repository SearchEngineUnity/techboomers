import { FaBullseye } from 'react-icons/fa';

export default {
  name: 'palette',
  type: 'document',
  title: 'Palette',
  __experimental_actions: ['create', 'update', 'publish'],
  icon: FaBullseye,
  fieldsets: [
    {
      name: 'brand',
      title: 'Brand',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'highlightBox',
      title: 'Highlight Box',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'common',
      title: 'Common',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'background',
      title: 'Background',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'text',
      title: 'Text',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      name: 'primary',
      title: 'Primary brand color',
      type: 'muiColorSet',
      description: 'Used to generate the primary accent color for websites, press materials, etc',
      fieldset: 'brand',
    },
    {
      name: 'secondary',
      title: 'Secondary brand color',
      type: 'muiColorSet',
      description: 'Used to generate the secondary accent color for websites, press materials, etc',
      fieldset: 'brand',
    },
    {
      name: 'definition',
      title: 'Definition',
      type: 'hlbColorSet',
      fieldset: 'highlightBox',
    },
    {
      name: 'dyk',
      title: 'Did You Know',
      type: 'hlbColorSet',
      fieldset: 'highlightBox',
    },
    {
      name: 'important',
      title: 'Important',
      type: 'hlbColorSet',
      fieldset: 'highlightBox',
    },
    {
      name: 'proTip',
      title: 'Pro Tip',
      type: 'hlbColorSet',
      fieldset: 'highlightBox',
    },
    {
      name: 'warning',
      title: 'Warning',
      type: 'hlbColorSet',
      fieldset: 'highlightBox',
    },
    {
      name: 'black',
      title: 'Black',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      fieldset: 'common',
    },
    {
      name: 'white',
      title: 'White',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      fieldset: 'common',
    },
    {
      name: 'paper',
      title: 'Paper',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      fieldset: 'background',
    },
    {
      name: 'default',
      title: 'Default',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      fieldset: 'background',
    },
    {
      name: 'primaryText',
      title: 'Primary',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      fieldset: 'text',
    },
    {
      name: 'secondaryText',
      title: 'Secondary',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      fieldset: 'text',
    },
    {
      name: 'disabledText',
      title: 'Disabled',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      fieldset: 'text',
    },
    {
      name: 'hintText',
      title: 'Hint',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      fieldset: 'text',
    },
    {
      name: 'divider',
      title: 'Divider',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: `Palette`,
      };
    },
  },
};
