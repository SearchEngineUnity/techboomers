import BaseBlockContent from '@sanity/block-content-to-react';
import React from 'react';
import { Link } from 'gatsby-theme-material-ui';
import InlineIcon from './InlineIcon';
import HeroSubtitle from './HeroSubtitle';

const serializers = {
  types: {
    block(props) {
      const { children } = props;

      return <HeroSubtitle>{children}</HeroSubtitle>;
    },
  },
  marks: {
    internalLink: ({ mark, children }) => {
      const { slug = {} } = mark.reference;
      const href = slug.current === '/' ? `/` : `/${slug.current}`;

      return <Link to={href}>{children}</Link>;
    },
    externalLink: ({ mark, children }) => {
      const { href } = mark;
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    },
  },
  inlineIcon: ({ mark, children }) => {
    switch (mark._type) {
      case 'inlineIcon':
        if (mark.asset) {
          return <InlineIcon image={mark.asset} alt={children[0]} />;
        }
        return null;

      default:
        return <p>doesn't work</p>; // eslint-disable-line
    }
  },
};

const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />;

export default BlockContent;
