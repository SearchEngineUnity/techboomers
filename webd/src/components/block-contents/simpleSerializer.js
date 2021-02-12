import BaseBlockContent from '@sanity/block-content-to-react';
import React from 'react';
import { Link } from 'gatsby';

const serializers = {
  types: {
    block({ children }) {
      return <p>{children}</p>;
    },
  },
  marks: {
    internalLink: ({ mark, children }) => {
      const { slug = {}, _type, isChapter, parentGuide } = mark.reference;
      let href = slug.current === '/' ? `/` : `/${slug.current}`;
      let mpSlug = '';

      if (_type === 'guide' && isChapter) {
        mpSlug = parentGuide.slug.current;
        href = `/${mpSlug}/${slug.current}`;
      }
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
};

const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />;

export default BlockContent;
