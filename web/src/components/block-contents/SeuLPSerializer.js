import BaseBlockContent from '@sanity/block-content-to-react';
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const RedI = styled.i`
  color: #f13718;
`;

const NoIndentUl = styled.ul`
  list-style-type: none;
  margin-left: 1.4rem;
  padding-left: 0;
  margin-bottom: 0;

  & > li {
    position: relative;
  }
`;

const PaddedLi = styled.li`
  margin-bottom: 1rem;
`;

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
  list: ({ children }) => {
    switch (children[0].props.node.listItem) {
      case 'bullet':
        return <NoIndentUl>{children}</NoIndentUl>;
      default:
        return <ol>{children}</ol>;
    }
  },
  listItem: ({ children }) => {
    return (
      <PaddedLi>
        <span className="fa-li">
          <RedI className="fas fa-plus fa-xs" />
        </span>
        {children}
      </PaddedLi>
    );
  },
};

const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />;

export default BlockContent;
