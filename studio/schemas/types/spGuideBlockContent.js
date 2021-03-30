import { FaExternalLinkAlt, FaLink, FaHashtag } from 'react-icons/fa';
import { MdLink, MdImage } from 'react-icons/md';
import { AiOutlinePicCenter } from 'react-icons/ai';
import ExternalLinkRenderer from '../components/ExternalLinkRenderer';
import InternalLinkRenderer from '../components/InternalLinkRenderer';
import JumpLinkRenderer from '../components/JumpLinkRenderer';
import InlineImageRenderer from '../components/InlineImageRenderer';
import HashIdRenderer from '../components/hashIdRenderer';

export default {
  title: 'Block Content',
  name: 'spGuideBlockContent',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'H5', value: 'h5' },
        { title: 'H6', value: 'h6' },
        { title: 'Quote', value: 'blockquote' },
      ],
      marks: {
        annotations: [
          {
            title: 'Hash Id',
            name: 'hashId',
            type: 'object',
            blockEditor: {
              icon: FaHashtag,
              render: HashIdRenderer,
            },
            fields: [
              {
                title: 'ID',
                name: 'idTag',
                type: 'string',
              },
            ],
          },
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
          {
            title: 'Inline Image',
            name: 'inlineImage',
            type: 'image',
            options: {
              hotspot: true, // <-- Defaults to false
              storeOriginalFilename: true,
            },
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
