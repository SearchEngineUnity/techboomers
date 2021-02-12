import BaseBlockContent from '@sanity/block-content-to-react';
import React from 'react';
import { Link } from 'gatsby';
import CtaBtn from './CtaBtn';
import Illustration from './Illustration';

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case 'h1':
          return <h1>{props.children}</h1>;

        case 'h2':
          return <h2>{props.children}</h2>;

        case 'h3':
          return <h3>{props.children}</h3>;

        case 'h4':
          return <h4>{props.children}</h4>;

        case 'blockquote':
          return <blockquote>{props.children}</blockquote>;

        default:
          return <p>{props.children}</p>;
      }
    },
    ctaButton({ node }) {
      return <CtaBtn btn={node} />;
    },
    illustration({ node }) {
      return <Illustration illustration={node} />;
      // return null
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
