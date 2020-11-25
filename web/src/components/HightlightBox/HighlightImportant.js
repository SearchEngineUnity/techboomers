import React from 'react';
// import './highlightImportant.css';
import { AiFillExclamationCircle } from 'react-icons/ai';
import { Alert } from 'react-bootstrap';
import ArticleContent from './block-contents/ArticleSerializer';

function HighlightImportant({ blockContent, id }) {
  return (
    <Alert variant="warning" key={id} className="text-dark">
      <Alert.Heading>
        <AiFillExclamationCircle /> Important
      </Alert.Heading>
      <ArticleContent blocks={blockContent} />
    </Alert>
  );
}

export default HighlightImportant;
