import { BsBootstrap } from 'react-icons/bs';

export default {
  name: 'btnDesignMui',
  title: 'Button Design - MUI',
  type: 'document',
  icon: BsBootstrap,
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
      title: 'name',
    },
  },
};
