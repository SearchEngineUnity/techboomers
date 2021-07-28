import { FaExternalLinkAlt, FaLink } from 'react-icons/fa';
import { MdLink } from 'react-icons/md';
import ExternalLinkRenderer from '../components/ExternalLinkRenderer';
import InternalLinkRenderer from '../components/InternalLinkRenderer';
import JumpLinkRenderer from '../components/JumpLinkRenderer';

export default {
  name: 'heroBlockContent',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
      ],
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
    {
      type: 'illustration',
    },
  ],
};
