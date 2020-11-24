import { FaBullseye } from 'react-icons/fa';

export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', 'publish'],
  icon: FaBullseye,
  fieldsets: [
    {
      name: 'general',
      title: 'General Settings',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: 'color',
      title: 'Color Setting',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    {
      name: 'recaptcha',
      title: 'reCaptcha Site Key',
      type: 'string',
      fieldset: 'general',
    },
    {
      type: 'color',
      name: 'primaryColor',
      title: 'Primary brand color',
      description: 'Used to generate the primary accent color for websites, press materials, etc',
      fieldset: 'color',
    },
    {
      type: 'color',
      name: 'secondaryColor',
      title: 'Secondary brand color',
      description: 'Used to generate the secondary accent color for websites, press materials, etc',
      fieldset: 'color',
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: `Site Settings`,
      };
    },
  },
};
