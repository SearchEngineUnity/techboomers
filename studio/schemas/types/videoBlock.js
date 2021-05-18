import { FaYoutube } from 'react-icons/fa';

export default {
  title: 'Video Block',
  name: 'videoBlock',
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
    {
      name: 'ratio',
      type: 'string',
      title: 'Aspect Ratio',
      options: {
        list: [
          { title: 'Youtube (16:9)', value: '56.25%' },
          { title: 'Vimeo (21:9)', value: '42.86%' },
        ],
      },
      initialValue: '56.25%',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Video Block',
      };
    },
  },
};
