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
      name: 'focusedColor',
      title: 'Focused Border Color',
      description:
        'Sets the color of borders, the checkbox label, the select label and the radio label color when one clicks into the field/fieldset.',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    },
    {
      name: 'backgroundColor',
      title: 'Backbround Color',
      description: 'Sets the backgroud color for filled variant and outlined variant.',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    },
    {
      name: 'fieldBgHoverColor',
      title: 'Background Hover Color',
      description:
        'Sets the backgroud color for filled variant and outlined variant on hover AND the background color for filled variant when one clicks into the filed/fieldset.',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    },
    {
      name: 'labelColor',
      title: 'Label Color',
      description:
        'Sets the label text color, helper text color and the outline color of checkbox and radio icons.',
      type: 'reference',
      to: [{ type: 'colorOption' }],
    },
    {
      name: 'inputColor',
      title: 'Input Color',
      type: 'reference',
      desription:
        'Sets the input text color, placeholder text color, and the border color on hover.',
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
