import React from 'react';
import { storiesOf } from '@storybook/react';
import HighlightDefinition from './HighlightDefinition';
import HighlightDidYouKnow from './HighlightDidYouKnow';
import HighlightImportant from './HighlightImportant';
import HighlightProTip from './HighlightProTip';
import HighlightWarning from './HighlightWarning';

const block = [
  {
    _key: 'bf7e0b72cbc1',
    _type: 'block',
    children: [
      {
        _key: 'bf7e0b72cbc89',
        _type: 'span',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
      },
      {
        _key: 'bf7e0b72cbc10',
        _type: 'span',
        marks: ['strong'],
        text: 'Average cost to paint a bedroom:',
      },
      {
        _key: 'bf7e0b72cbc11',
        _type: 'span',
        marks: [],
        text: ' $300 to $790. ',
      },
      {
        _key: 'bf7e0b72cbc12',
        _type: 'span',
        marks: ['9869179553fd'],
        text: 'Internal link test',
      },
      {
        _key: 'bf7e0b72cbc13',
        _type: 'span',
        marks: [],
        text: '. ',
      },
      {
        _key: 'bf7e0b72cbc14',
        _type: 'span',
        marks: ['f5b015ff8ac5'],
        text: 'External link test',
      },
      {
        _key: 'bf7e0b72cbc15',
        _type: 'span',
        marks: [],
        text: '.',
      },
    ],
    markDefs: [
      {
        _key: '9869179553fd',
        _type: 'internalLink',
        reference: {
          _id: '5a64cb47-f5f2-48eb-90f7-4aef7a643da2',
          _type: 'page',
          _createdAt: '2020-06-18T06:00:08Z',
          _rev: 'cWtxp6mvtExWWAjzynT9lh',
          _updatedAt: '2020-06-25T04:42:24Z',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          facebook: {
            _type: 'openGraph',
            image: {
              _type: 'image',
              asset: {
                _id: 'image-ea6006fb5fc26d29ec6a6ce8b2b5bd2ddca0cda9-768x512-png',
                _type: 'sanity.imageAsset',
                _createdAt: '2020-06-18T16:33:06Z',
                _rev: 'k9ZkQjXrkHM0CMnJ3LNKYj',
                _updatedAt: '2020-06-18T16:33:06Z',
                assetId: 'ea6006fb5fc26d29ec6a6ce8b2b5bd2ddca0cda9',
                extension: 'png',
                metadata: {
                  _type: 'sanity.imageMetadata',
                  dimensions: {
                    _type: 'sanity.imageDimensions',
                    aspectRatio: 1.5,
                    height: 512,
                    width: 768,
                  },
                  hasAlpha: true,
                  isOpaque: true,
                  lqip:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAADpUlEQVQ4yxWQ60/bZRiG+20m4rbMyRxkIxzFOacO5LRF3KJBNOhmwAEDAaciUhxMyqnAONMCxUKhLWBLS8uhrCcoh3a0nBmHAWOi21g2jdEP+ldc/vzw5E2evLnu+3pEmhYxo+pqpkcUzDs0LLkG2LhrZP+elac7kzzetHN/zsDSRK+w17G7OMTmnA6fvQubrgGDUoJWJqa74RsUtbmIlDV5GDtLcOob8VpVbHnNHOzM8NfBIn8/WRCgLtam+3CPyFlxqdleGGJ3ycSmV4/PqcJuaEKvKEZeloHkqyRE+vYihjuLcPSV47W0sz1v5vd9L//8scG/wjzf87DkVDMhBN4dV7IyPcCaW8c9j45FIcA5WE+XNIui1DiuxgcjmjA0YNeUMqEpwTNUy7KQurds4enuDH/+9n/DGby2Xix99YJiMxNDcpxGGS6TDHt/FerKdMrT3iUnMYSUt08gmh1T4OyvxKEuxm2QsjqpZtM3wrpnSNAbY2/FxrxTi13fzFhfHWZ1DYbuKoaUpfTfzqIl7yLlV84iTo4kIyEIkVu427hWikkhxqYpF5R07G242ZgfZ91n4Zf7s+wIjeft3ViNzZgHWxjWt2LsKkctTaf920QasuMoSz3Pl4mhiHwuLSNCck9TIX2ym9j0clY9FrYWbGyvTXHwZJ1HDz2szQ7gGO1g3KLEPt6LqacaVVUG8u8u05h7AUlaNNmJYYiWpzRYBR1NWxlauQRd649YVTUs2rQ8WJ/l+bMHPN5fZGnqZ6ymNkbNHYwMtgt/b9H0fQoV12KQpEYhTjlHWpygfKfvNmaVoKxu4o5OwbBCypi8lAWhxa9bczx7tCWAPUyO9qDvqUOrrEbRcBNp4TUKrsSRe+k1QTWcz2NO817EMUTi7E8oy/+CfkUtHusgc1YDPpuRDa+Dhxs+9nfWWPVNYer/CZWsEmXjTcoLUklPiiElLoLPYsNIiQ7mQvhxzga8iCgqMohLsecoyc9ioFvGuGmACesw004LbpeNhTkP05MOVB3NNFcW0iH9muKcj/ggOpToMH/iIwO4+HogUSHHeTP4FURB/keJOH2C9+PfIS/9UySFudRV/ICsvoJOWR29yjZUilbqywqpFl+ntTSbW7nJXD4fQvjJw4T5+3FGeCMDjggcARhwzI9T/kd4KyKQpIQ3yPw4lvz0Dym+cRVJQSYVRTlUFeUKsEyaiq/TUXmD6oI0khPOEPrqSwQefYFTwpw8fIiX/Q7xHwZ9meMEOpxVAAAAAElFTkSuQmCC',
                  palette: {
                    _type: 'sanity.imagePalette',
                    darkMuted: {
                      _type: 'sanity.imagePaletteSwatch',
                      background: '#4c5436',
                      foreground: '#fff',
                      population: 0.01,
                      title: '#fff',
                    },
                    darkVibrant: {
                      _type: 'sanity.imagePaletteSwatch',
                      background: '#5e3d22',
                      foreground: '#fff',
                      population: 4.63,
                      title: '#fff',
                    },
                    dominant: {
                      _type: 'sanity.imagePaletteSwatch',
                      background: '#cfbda0',
                      foreground: '#000',
                      population: 5.53,
                      title: '#fff',
                    },
                    lightMuted: {
                      _type: 'sanity.imagePaletteSwatch',
                      background: '#cfbda0',
                      foreground: '#000',
                      population: 5.53,
                      title: '#fff',
                    },
                    lightVibrant: {
                      _type: 'sanity.imagePaletteSwatch',
                      background: '#dccab1',
                      foreground: '#000',
                      population: 2.88,
                      title: '#000',
                    },
                    muted: {
                      _type: 'sanity.imagePaletteSwatch',
                      background: '#988167',
                      foreground: '#fff',
                      population: 4.84,
                      title: '#fff',
                    },
                    vibrant: {
                      _type: 'sanity.imagePaletteSwatch',
                      background: '#725333',
                      foreground: '#fff',
                      population: 3.72,
                      title: '#fff',
                    },
                  },
                },
                mimeType: 'image/png',
                originalFilename: 'image.png',
                path:
                  'images/irxu5yey/epoxypro/ea6006fb5fc26d29ec6a6ce8b2b5bd2ddca0cda9-768x512.png',
                sha1hash: 'ea6006fb5fc26d29ec6a6ce8b2b5bd2ddca0cda9',
                size: 802381,
                uploadId: 'Ypb0ddeR6HgGzkXPGetqdooOFEhO8KPt',
                url:
                  'https://cdn.sanity.io/images/irxu5yey/epoxypro/ea6006fb5fc26d29ec6a6ce8b2b5bd2ddca0cda9-768x512.png',
                id: 'image-ea6006fb5fc26d29ec6a6ce8b2b5bd2ddca0cda9-768x512-png',
                parent: null,
                children: ['fd3ed5b5-dc96-5dc1-ae7a-2c1176314ff4'],
                internal: {
                  type: 'SanityImageAsset',
                  contentDigest: '54507abd5014d55fbbdebaad206c1d10',
                  counter: 59,
                  owner: 'gatsby-source-sanity',
                },
              },
            },
          },
          segments: [],
          shortName: 'Guide',
          slug: {
            _type: 'slug',
            current: 'guide',
          },
          title: 'This is the guide page',
          id: '68ecaa96-da47-5efb-b0fa-b756126f424f',
          parent: null,
          children: [],
          internal: {
            type: 'SanityPage',
            contentDigest: '9d747b626b1993e166b41805c7d2fc33',
            counter: 38,
            owner: 'gatsby-source-sanity',
          },
        },
      },
      {
        _key: 'f5b015ff8ac5',
        _type: 'link',
        href: 'www.google.com',
      },
    ],
    style: 'normal',
  },
];

storiesOf('Highlight Box', module).add('Definition', () => (
  <HighlightDefinition blockContent={block} id={1} />
));

storiesOf('Highlight Box', module).add('Did You Know', () => (
  <HighlightDidYouKnow blockContent={block} id={2} />
));

storiesOf('Highlight Box', module).add('Important', () => (
  <HighlightImportant blockContent={block} id={3} />
));

storiesOf('Highlight Box', module).add('Pro Tip', () => (
  <HighlightProTip blockContent={block} id={4} />
));

storiesOf('Highlight Box', module).add('Warning', () => (
  <HighlightWarning blockContent={block} id={5} />
));
