import { FaExternalLinkAlt, FaLink } from 'react-icons/fa';
import ExternalLinkRenderer from '../components/ExternalLinkRenderer';
import InternalLinkRenderer from '../components/InternalLinkRenderer';

export default {
  name: 'simpleBlockContent',
  type: 'array',
  of: [
    {
      type: 'block',
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
              {
                title: 'Open in new tab?',
                name: 'newTab',
                type: 'boolean',
                initialValue: true,
              },
              {
                title: 'rel=noreferrer?',
                name: 'noreferrer',
                type: 'boolean',
                initialValue: true,
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
                to: [{ type: 'page' }, { type: 'spGuide' }, { type: 'listingPage' }],
              },
              {
                name: 'internalHash',
                title: 'Hash Id',
                type: 'string',
                description: 'Please enter the ID of the segment you would like to jump to',
              },
              {
                title: 'Open in new tab?',
                name: 'newTab',
                type: 'boolean',
                initialValue: false,
              },
            ],
          },
        ],
      },
    },
  ],
};
