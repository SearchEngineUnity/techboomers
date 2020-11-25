import React from 'react';
import ArticleContent from './block-contents/ArticleSerializer';

function Article({ title, blockContent, colWidth, id }) {
  return (
    <div className={colWidth} key={id}>
      <h3>{title}</h3>
      <ArticleContent blocks={blockContent} />
    </div>
  );
}

export default Article;
