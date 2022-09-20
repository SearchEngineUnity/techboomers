import React from 'react';

export default {
  name: 'customSpacing',
  type: 'document',
  title: 'Spacing',
  __experimental_actions: ['create', 'update', 'publish'],
  fieldsets: [
    {
      name: 'section',
      title: 'Section Spacing Setting Pack',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'column',
      title: 'Column Spacing Setting Pack',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      name: 'section',
      title: 'Section Padding',
      type: 'paddingSet',
      description: (
        <>
          Recommend to set horizontal padding to be 0px. Accept string as per padding CSS variable.{' '}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding"
            target="_blank"
            rel="noreferrer"
          >
            Resource link
          </a>
        </>
      ),
      fieldset: 'section',
    },
    {
      name: 'column',
      title: 'Column Padding',
      type: 'paddingSet',
      description: (
        <>
          Accept string as per padding CSS variable.{' '}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding"
            target="_blank"
            rel="noreferrer"
          >
            Resource link
          </a>
        </>
      ),
      fieldset: 'column',
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: `Spacing`,
      };
    },
  },
};
