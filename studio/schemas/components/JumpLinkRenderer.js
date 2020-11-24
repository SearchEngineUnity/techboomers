import React from 'react';
import PropTypes from 'prop-types';
import { MdLink } from 'react-icons/md';

const JumpLinkRenderer = ({ children }) => {
  return (
    <span>
      {children}
      <MdLink style={{ display: 'inline' }} />
    </span>
  );
};

JumpLinkRenderer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default JumpLinkRenderer;
