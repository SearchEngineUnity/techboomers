// this is currently not in use but is kept should we ever work on this feature

import { FaBullseye } from 'react-icons/fa';

export default {
  name: 'generalSettings',
  type: 'document',
  title: 'General Settings',
  __experimental_actions: ['create', 'update', 'publish'],
  icon: FaBullseye,
  fields: [
    // {
    //   name: 'recaptcha',
    //   title: 'reCaptcha Site Key',
    //   type: 'string',
    // },
    {
      name: 'siteDomain',
      title: 'Site Domain',
      description:
        'This is the domain where all pages will be published under. Used for canonical.',
      type: 'url',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: `General Settings`,
      };
    },
  },
};
