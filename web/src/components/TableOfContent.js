import React from 'react';

function Toc({ toc }) {
  const componentTypeSwitch = (link) => {
    switch (link.type) {
      case 'h2':
        return (
          <a href={`#${link.header.toLowerCase().trim().replace(/ /g, '-')}`} key={link._key}>
            <p>{link.title}</p>
          </a>
        );

      default:
        return <p>Need to define link in menu</p>;
    }
  };

  return (
    <div className="sticky-top">
      <h3>Table of Content</h3>
      {toc.map((link) => {
        return componentTypeSwitch(link);
      })}
    </div>
  );
}

export default Toc;
