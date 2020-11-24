import { MdLink } from 'react-icons/md';

export default {
  name: 'meta',
  type: 'object',
  title: 'Meta Tags',
  icon: MdLink,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Optimal length is under 60 characters for Google SERP',
      validation: (Rule) => [Rule.max(60).warning('Length over optimal')],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Optimal length is under 160 characters for Google SERP',
      validation: (Rule) => [Rule.max(160).warning('Length over optimal')],
    },
    {
      title: 'Facebook Sharing',
      name: 'openGraph',
      type: 'openGraph',
    },
    {
      title: 'Twitter Sharing',
      name: 'twitterTag',
      type: 'twitterTag',
    },
  ],
};
