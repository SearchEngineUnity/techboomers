import TableInput from './tableInput';

export default {
  name: 'table',
  type: 'object',
  fields: [
    {
      name: 'rows',
      type: 'array',
      of: [{ type: 'row' }],
    },
  ],
  inputComponent: TableInput,
};
