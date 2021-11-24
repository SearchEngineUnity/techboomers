import { HiOutlineColorSwatch } from 'react-icons/hi';

export default {
  name: 'btnDesignMui',
  title: 'Button Design - MUI',
  type: 'document',
  icon: HiOutlineColorSwatch,
  fields: [
    {
      name: 'name',
      title: 'Design Name',
      type: 'string',
    },
    {
      name: 'settings',
      title: 'Button Settings',
      type: 'btnSettingsMui',
    },
    {
      name: 'colors',
      title: 'Color Settings',
      type: 'muiBtnColorSet',
    },
    {
      name: 'typography',
      title: 'Typography Settings',
      type: 'muiTypeStyleSetBtn',
    },
  ],
  preview: {
    select: {
      name: 'name',
      variant: 'settings.variant',
    },
    prepare({ name, variant }) {
      return {
        title: name,
        subtitle: `Variant: ${variant}`,
      };
    },
  },
};
