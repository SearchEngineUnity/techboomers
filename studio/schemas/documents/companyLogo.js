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
      description: `This is used as the logo image's alt`,
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'illustration',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'logo',
    },
  },
};
