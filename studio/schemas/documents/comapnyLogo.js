import { FaRegImages } from 'react-icons/fa';

export default {
  name: 'companyLogo',
  title: 'Logo',
  type: 'document',
  icon: FaRegImages,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
