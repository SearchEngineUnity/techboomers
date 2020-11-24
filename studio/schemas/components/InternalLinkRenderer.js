import React from 'react';
import PropTypes from 'prop-types';
import { FaLink } from 'react-icons/fa';

const InternalLinkRenderer = ({ children }) => {
  return (
    <span>
      {children}
      <FaLink style={{ display: 'inline' }} />
    </span>
  );
};

InternalLinkRenderer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InternalLinkRenderer;
