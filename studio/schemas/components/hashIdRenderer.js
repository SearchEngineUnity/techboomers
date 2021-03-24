import React from 'react';
import PropTypes from 'prop-types';
import { FaHashtag } from 'react-icons/fa';

const HashIdRenderer = ({ children }) => (
  <span>
    {children}
    <FaHashtag style={{ display: 'inline' }} />
  </span>
);

HashIdRenderer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HashIdRenderer;
