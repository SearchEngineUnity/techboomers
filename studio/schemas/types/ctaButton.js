import { MdAddBox } from 'react-icons/md';

export default {
  title: 'CTA Button',
  name: 'ctaButton',
  type: 'object',
  icon: MdAddBox,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Internal page',
      name: 'internalLink',
      type: 'internalLink',
      description: 'Use this field to look up the page within the same website',
    },
    {
      title: 'External link',
      name: 'externalLink',
      type: 'externalLink',
      description: 'Use this field if link is external to the website',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
