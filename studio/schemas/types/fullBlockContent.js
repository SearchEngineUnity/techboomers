import { FaExternalLinkAlt, FaLink } from 'react-icons/fa';
import { MdLink, MdImage } from 'react-icons/md';
import ExternalLinkRenderer from '../components/ExternalLinkRenderer';
import InternalLinkRenderer from '../components/InternalLinkRenderer';
import JumpLinkRenderer from '../components/JumpLinkRenderer';
import InlineImageRenderer from '../components/InlineImageRenderer';

export default {
  title: 'Block Content',
  name: 'fullBlockContent',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Heading 1', value: 'h1' },
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
                to: [{ type: 'guide' }, { type: 'page' }],
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
                name: 'heading',
                type: 'string',
                title: 'Heading',
                description: 'The exact full heading of jump destination.',
              },
            ],
          },
          {
            title: 'Inline Image',
            name: 'inlineImage',
            type: 'image',
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
  ],
};
