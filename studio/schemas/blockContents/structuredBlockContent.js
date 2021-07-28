import { FaExternalLinkAlt, FaLink, FaHashtag } from 'react-icons/fa';
import { MdLink, MdImage } from 'react-icons/md';
import ExternalLinkRenderer from '../components/ExternalLinkRenderer';
import InternalLinkRenderer from '../components/InternalLinkRenderer';
import JumpLinkRenderer from '../components/JumpLinkRenderer';
import InlineImageRenderer from '../components/InlineImageRenderer';
import HashIdRenderer from '../components/hashIdRenderer';

export default {
  title: 'Block Content',
  name: 'structuredBlockContent',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
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
          {
            title: 'Inline Image',
            name: 'inlineImage',
            type: 'image',
            options: {
              hotspot: true, // <-- Defaults to false
              storeOriginalFilename: true,
            },
            fields: [
              {
                name: 'height',
                type: 'string',
                title: 'Image height',
                description: `You can enter a height % of vh. If the image's native height is smaller it will be used instead.`,
                options: {
                  isHighlighted: true, // <-- make this field easily accessible
                },
              },
            ],
            blockEditor: {
              icon: MdImage,
              render: InlineImageRenderer,
            },
            validation: (Rule) => [Rule.required().error('Missing Image')],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: 'illustration',
    },
    {
      type: 'basicTable',
    },
    {
      type: 'smartTable',
    },
    {
      type: 'highlightBox',
    },
    { type: 'videoEmbed' },
  ],
};
