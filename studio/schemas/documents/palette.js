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
      title: 'Brand Palette',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'highlightbox',
      title: 'HighlightBox Palette',
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
      title: 'HLB Definition',
      type: 'hlbColorSet',
      fieldset: 'highlightbox',
    },
    {
      name: 'dyk',
      title: 'HLB Did You Know',
      type: 'hlbColorSet',
      fieldset: 'highlightbox',
    },
    {
      name: 'important',
      title: 'HLB Impotant',
      type: 'hlbColorSet',
      fieldset: 'highlightbox',
    },
    {
      name: 'protip',
      title: 'HLB Pro Tip',
      type: 'hlbColorSet',
      fieldset: 'highlightbox',
    },
    {
      name: 'warning',
      title: 'HLB Warning',
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
