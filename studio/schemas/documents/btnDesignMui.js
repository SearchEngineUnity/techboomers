import { BsBootstrap } from 'react-icons/bs';

export default {
  name: 'btnDesignMui',
  title: 'Button Design - MUI',
  type: 'document',
  icon: BsBootstrap,
  fields: [
    {
      name: 'name',
      title: 'Button Design Name',
      type: 'string',
    },
    {
      name: 'settings',
      title: 'Button Settings',
      type: 'btnSettingsMui',
    },
    {
      name: 'colors',
      title: 'Color settings',
      type: 'muiBtnColorSet',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};
