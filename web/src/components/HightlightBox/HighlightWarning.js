import React from 'react';
// import './highlightWarning.css';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Alert } from 'react-bootstrap';
import ArticleContent from './block-contents/ArticleSerializer';

function HighlightWarning({ blockContent, id }) {
  return (
    <Alert variant="danger" key={id} className="text-dark">
      <Alert.Heading>
        <FaExclamationTriangle /> Warning
      </Alert.Heading>
      <ArticleContent blocks={blockContent} />
    </Alert>
  );
}

export default HighlightWarning;
