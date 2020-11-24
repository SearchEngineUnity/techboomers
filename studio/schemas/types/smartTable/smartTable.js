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
      name: 'options',
      type: 'string',
      title: 'Presentation options',
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
