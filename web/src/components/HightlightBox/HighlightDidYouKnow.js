import React from 'react';
// import './highlightDidYouKnow.css';
import { FaRegLightbulb } from 'react-icons/fa';
import { Alert } from 'react-bootstrap';
import ArticleContent from './block-contents/ArticleSerializer';

function HighlightDidYouKnow({ blockContent, id }) {
  return (
    <Alert variant="success" key={id} className="text-dark">
      <Alert.Heading>
        <FaRegLightbulb /> Did You Know
      </Alert.Heading>
      <ArticleContent blocks={blockContent} />
    </Alert>
  );
}

export default HighlightDidYouKnow;
