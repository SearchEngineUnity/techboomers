import React from 'react';
// import './highlightProTip.css';
import { FaRegThumbsUp } from 'react-icons/fa';
import { Alert } from 'react-bootstrap';
import ArticleContent from './block-contents/ArticleSerializer';

function HighlightProTip({ blockContent, id }) {
  console.log(JSON.stringify(blockContent, null, 2));
  return (
    <Alert variant="primary" key={id} className="text-dark">
      <Alert.Heading>
        <FaRegThumbsUp /> Pro Tip
      </Alert.Heading>
      <ArticleContent blocks={blockContent} />
    </Alert>
  );
}

export default HighlightProTip;
