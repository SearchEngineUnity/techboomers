import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'gatsby';

function CtaBtn({ btn }) {
  if (btn.internalLink) {
    return (
      <Link to={btn.to}>
        <Button key={btn.id} className={`${btn.size} ${btn.borderRadius}btn`}>
          {btn.title}
        </Button>
      </Link>
    );
  }
  if (btn.externalLink) {
    return (
      <a href={btn.href} target="_blank" rel="noopener noreferrer">
        <Button key={btn.id} className={`${btn.size} ${btn.borderRadius}btn`}>
          {btn.title}
        </Button>
      </a>
    );
  }

  return null;
}

export default CtaBtn;
