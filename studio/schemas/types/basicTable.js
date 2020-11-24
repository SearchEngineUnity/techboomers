import { FaTable } from 'react-icons/fa';

export default {
  name: 'basicTable',
  title: 'Table',
  type: 'object',
  icon: FaTable,
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
      type: 'table',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
