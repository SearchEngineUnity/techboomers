import BaseBlockContent from '@sanity/block-content-to-react';
import React from 'react';
import { Link, graphql } from 'gatsby';
import BasicTable from './BasicTable';
import CtaBtn from './CtaBtn';
import Illustration from './Illustration';
import InlineImage from './InlineImage';
import HighlightBox from '../HighlightBox';
import SmartTable from './SmartTable';

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case 'h1':
          return (
            <h1 id={`${props.children.toString().toLowerCase().trim().replace(/ /g, '-')}`}>
              {props.children}
            </h1>
          );

        case 'h2':
          return (
            <h2 id={`${props.children.toString().toLowerCase().trim().replace(/ /g, '-')}`}>
              {props.children}
            </h2>
          );

        case 'h3':
          return (
            <h3 id={`${props.children.toString().toLowerCase().trim().replace(/ /g, '-')}`}>
              {props.children}
            </h3>
          );

        case 'h4':
          return (
            <h4 id={`${props.children.toString().toLowerCase().trim().replace(/ /g, '-')}`}>
              {props.children}
            </h4>
          );

        case 'h5':
          return (
            <h5 id={`${props.children.toString().toLowerCase().trim().replace(/ /g, '-')}`}>
              {props.children}
            </h5>
          );

        case 'h6':
          return (
            <h6 id={`${props.children.toString().toLowerCase().trim().replace(/ /g, '-')}`}>
              {props.children}
            </h6>
          );

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
    },
    basicTable({ node }) {
      return <BasicTable basicTable={node} />;
    },
    highlightBox({ node }) {
      return <HighlightBox box={node} />;
    },
    smartTable({ node }) {
      return <SmartTable smartTable={node} />;
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
    jumpLink: ({ mark, children }) => {
      const { heading } = mark;
      return <a href={`#${heading.toLowerCase().trim().replace(/ /g, '-')}`}>{children}</a>;
    },
    inlineImage: ({ mark, children }) => {
      switch (mark._type) {
        case 'inlineImage':
          if (mark.asset) {
            return <InlineImage image={mark.asset} alt={children[0]} />;
          }
          return null;

        default:
          return <p>doesn't work</p>; // eslint-disable-line
      }
    },
  },
};

const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />;

export default BlockContent;
