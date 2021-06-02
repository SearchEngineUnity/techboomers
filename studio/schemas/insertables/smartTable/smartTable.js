import { GrTableAdd } from 'react-icons/gr';

export default {
  name: 'smartTable',
  title: 'Smart Table',
  type: 'object',
  icon: GrTableAdd,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Table Name',
    },
    {
      name: 'colHeading',
      type: 'boolean',
      title: 'This table has a column heading',
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'rowHeading',
      type: 'boolean',
      title: 'This table has a row heading',
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'colgroup',
      type: 'array',
      title:
        'This sets the width of column in order from left to right. Use 0 for auto default sizing.',
      of: [{ type: 'colWidth' }],
    },
    {
      name: 'table',
      type: 'tablePlus',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
