export default {
  name: 'row',
  type: 'object',
  fields: [
    {
      name: 'cells',
      type: 'array',
      of: [{ name: 'cell', type: 'string' }],
    },
  ],
};
