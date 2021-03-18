import React, { useEffect, useMemo } from 'react';
import { useActiveHash } from '../hooks/useActiveHash';

export default function TableOfContents({ html }) {
  const targetedIds = useMemo(() => {
    const dummyDOM = document.createElement('html');
    dummyDOM.innerHTML = html;
    const justAnchors = dummyDOM.querySelectorAll(`a`);

    const val = [];
    justAnchors.forEach((a) => {
      val.push(a.hash.replace('#', ''));
    });

    return val;
  }, []);

  const activeHash = useActiveHash(targetedIds);

  useEffect(() => {
    const ToClinks = document.querySelectorAll(`.ToCs a`);

    ToClinks.forEach((a) => {
      a.classList.remove('isActive');
    });

    const activeLink = document.querySelectorAll(`.ToCs a[href$="${`/#${activeHash}`}"]`);

    if (activeLink.length) {
      activeLink[0].classList.add('isActive');
    }
  }, [activeHash]);

  return (
    <div>
      <h2>Table Of Contents</h2>
      <div className="ToCs" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
