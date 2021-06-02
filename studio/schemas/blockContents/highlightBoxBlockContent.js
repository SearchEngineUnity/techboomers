import { FaExternalLinkAlt, FaLink } from 'react-icons/fa';
import { MdLink } from 'react-icons/md';
import ExternalLinkRenderer from '../components/ExternalLinkRenderer';
import InternalLinkRenderer from '../components/InternalLinkRenderer';
import JumpLinkRenderer from '../components/JumpLinkRenderer';

export default {
  name: 'highlightBoxBlockContent',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [],
      marks: {
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
            name: 'jumpLink',
            type: 'object',
            title: 'Page Jump',
            blockEditor: {
              icon: MdLink,
              render: JumpLinkRenderer,
            },
            fields: [
              {
                name: 'idTag',
                type: 'string',
                title: 'ID tag',
                description: 'The exact ID of the destination.',
              },
            ],
          },
        ],
      },
    },
  ],
};
