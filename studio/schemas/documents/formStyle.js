export default {
  name: 'formStyle',
  type: 'document',
  title: 'formStyle',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'fieldVariant',
      title: 'Form Field Variant',
      type: 'string',
      description:
        'This determines the field variant that is used for Input, Textarea, and Select.',
      options: {
        list: [
          { title: 'Underline', value: 'standard' },
          { title: 'Filled', value: 'filled' },
          { title: 'Outlined', value: 'outlined' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'outlined',
    },
    {
      name: 'borderRadius',
      title: 'border Radius',
      type: 'string',
    },
    {
      name: 'hoverColor',
      title: 'Hover Border Color',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    },
    {
      name: 'focusedColor',
      title: 'Focused Border Color',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    },
    {
      name: 'backgroundColor',
      title: 'Backbround Color',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    },
    {
      name: 'fieldBgHoverColor',
      title: 'Background Hover Color',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    },
    {
      name: 'labelColor',
      title: 'Label Color',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    },
    {
      name: 'inputColor',
      title: 'Input Color',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    },
    {
      name: 'selectorColor',
      title: 'Selector Color',
      description: 'This would apply to the radio button and the checkbox.',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    },
    {
      name: 'btnStyle',
      title: 'Button Style',
      type: 'reference',
      to: [{ type: 'btnDesignMui' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};
