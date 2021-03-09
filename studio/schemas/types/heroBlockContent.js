import { FaExternalLinkAlt, FaLink } from 'react-icons/fa';
import ExternalLinkRenderer from '../components/ExternalLinkRenderer';
import InternalLinkRenderer from '../components/InternalLinkRenderer';
import InlineIconRenderer from '../components/InlineIconRenderer';

export default {
  name: 'heroBlockContent',
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
            name: 'externalLink',
            type: 'object',
            blockEditor: {
              icon: FaExternalLinkAlt,
              render: ExternalLinkRenderer,
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
              render: InternalLinkRenderer,
            },
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [{ type: 'spGuide' }, { type: 'page' }],
              },
            ],
          },
          {
            title: 'Inline Icon',
            name: 'inlineIcon',
            type: 'image',
            options: {
              storeOriginalFilename: true,
            },
            blockEditor: {
              render: InlineIconRenderer,
            },
            validation: (Rule) => [Rule.required().error('Missing Image')],
          },
        ],
      },
    },
  ],
};
