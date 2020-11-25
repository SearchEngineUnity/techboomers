import { IoIosPeople } from 'react-icons/io';

export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  icon: IoIosPeople,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'job',
      title: 'Job Title',
      type: 'string',
    },
    {
      name: 'organization',
      title: 'Organization',
      type: 'string',
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
    },
    {
      name: 'biography',
      title: 'Biography',
      type: 'bio',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    },
    {
      name: 'metaTags',
      type: 'meta',
      title: 'Meta Tags',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'photo',
    },
  },
};
