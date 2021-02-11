import { FaBullseye } from 'react-icons/fa';

export default {
  name: 'palette',
  type: 'document',
  title: 'Palette',
  __experimental_actions: ['create', 'update', 'publish'],
  icon: FaBullseye,
  fields: [
    {
      type: 'colorObj',
      name: 'primary',
      title: 'Primary brand color',
      description: 'Used to generate the primary accent color for websites, press materials, etc',
    },
    {
      type: 'colorObj',
      name: 'secondary',
      title: 'Secondary brand color',
      description: 'Used to generate the secondary accent color for websites, press materials, etc',
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
