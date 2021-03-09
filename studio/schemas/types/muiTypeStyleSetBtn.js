export default {
  name: 'muiTypeStyleSetBtn',
  title: 'Mui Typography - Btn',
  type: 'object',
  fieldsets: [
    {
      name: 'set',
      options: {
        collapsible: false,
        collapsed: false,
        columns: 4,
      },
    },
  ],
  fields: [
    {
      name: 'fontFamily',
      title: 'Font Family',
      type: 'string',
      fieldset: 'set',
    },
    {
      name: 'fontWeight',
      title: 'Font Weight',
      type: 'number',
      options: {
        list: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
      fieldset: 'set',
    },
    {
      name: 'fontSize',
      title: 'Font Size',
      type: 'string',
      fieldset: 'set',
    },
    {
      name: 'lineHeight',
      title: 'Line Height',
      type: 'number',
      fieldset: 'set',
    },
    {
      name: 'letterSpacing',
      title: 'Letter Spacing',
      type: 'string',
      fieldset: 'set',
    },
  ],
};
