import { BsApp } from 'react-icons/bs';

export default {
  name: 'app',
  title: 'App',
  type: 'document',
  icon: BsApp,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
  },
};
