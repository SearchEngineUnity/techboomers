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
        columns: 2,
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
      fieldSet: 'brand',
    },
    {
      name: 'secondary',
      title: 'Secondary brand color',
      type: 'muiColorSet',
      description: 'Used to generate the secondary accent color for websites, press materials, etc',
      fieldSet: 'brand',
    },
    {
      name: 'definition',
      title: 'HLB Definition',
      type: 'hlbColorSet',
      fieldSet: 'highlightbox',
    },
    {
      name: 'dyk',
      title: 'HLB Did You Know',
      type: 'hlbColorSet',
      fieldSet: 'highlightbox',
    },
    {
      name: 'important',
      title: 'HLB Impotant',
      type: 'hlbColorSet',
      fieldSet: 'highlightbox',
    },
    {
      name: 'protip',
      title: 'HLB Pro Tip',
      type: 'hlbColorSet',
      fieldSet: 'highlightbox',
    },
    {
      name: 'warning',
      title: 'HLB Warning',
      type: 'hlbColorSet',
      fieldSet: 'highlightbox',
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
