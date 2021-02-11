import React from 'react';
import { Button } from 'gatsby-theme-material-ui';
import { Button as ExternalButton } from '@material-ui/core';

function CtaBtn({ btn }) {
  if (btn.internalLink) {
    return (
      <Button key={btn.id} className={`${btn.size} ${btn.borderRadius}btn`} to={btn.to}>
        {btn.title}
      </Button>
    );
  }
  if (btn.externalLink) {
    return (
      <ExternalButton
        key={btn.id}
        className={`${btn.size} ${btn.borderRadius}btn`}
        href={btn.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {btn.title}
      </ExternalButton>
    );
  }

  return null;
}

export default CtaBtn;
