import { FaYoutube } from 'react-icons/fa';

export default {
  title: 'Youtube Video',
  name: 'youtubeBlock',
  type: 'object',
  icon: FaYoutube,
  fields: [
    // https://www.sanity.io/docs/schema-types/string-type
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    // https://www.sanity.io/docs/schema-types/url-type
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ['https', 'http', 'mailto', 'tel'],
        }),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Youtube Block',
      };
    },
  },
};
