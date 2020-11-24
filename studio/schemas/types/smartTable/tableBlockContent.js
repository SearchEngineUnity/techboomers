import { FaRegSmile, FaExternalLinkAlt, FaLink } from 'react-icons/fa';

export default {
  name: 'tableBlockContent',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [
          {
            title: 'External Link',
            name: 'link',
            type: 'object',
            blockEditor: {
              icon: FaExternalLinkAlt,
            },
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: true,
                    scheme: ['https', 'http', 'mailto', 'tel'],
                  }),
              },
            ],
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            blockEditor: {
              icon: FaLink,
            },
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [{ type: 'guide' }, { type: 'page' }],
              },
            ],
          },
        ],
      },
    },
  ],
};
