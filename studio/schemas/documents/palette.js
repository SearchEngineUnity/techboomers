import { FaBullseye } from 'react-icons/fa';

export default {
  name: 'palette',
  type: 'document',
  title: 'Palette',
  __experimental_actions: ['create', 'update', 'publish'],
  icon: FaBullseye,
  fieldsets: [
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
      name: 'brand',
      title: 'Brand',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'highlightbox',
      title: 'Highlight Box',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      name: 'black',
      title: 'Black',
      type: 'color',
      fieldset: 'common',
    },
    {
      name: 'white',
      title: 'White',
      type: 'color',
      fieldset: 'common',
    },
    {
      name: 'paper',
      title: 'Paper',
      type: 'color',
      fieldset: 'background',
    },
    {
      name: 'default',
      title: 'Default',
      type: 'color',
      fieldset: 'background',
    },
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
      fieldset: 'highlightbox',
    },
    {
      name: 'dyk',
      title: 'Did You Know',
      type: 'hlbColorSet',
      fieldset: 'highlightbox',
    },
    {
      name: 'important',
      title: 'Impotant',
      type: 'hlbColorSet',
      fieldset: 'highlightbox',
    },
    {
      name: 'protip',
      title: 'Pro Tip',
      type: 'hlbColorSet',
      fieldset: 'highlightbox',
    },
    {
      name: 'warning',
      title: 'Warning',
      type: 'hlbColorSet',
      fieldset: 'highlightbox',
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
