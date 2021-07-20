export default {
  name: 'btnSettingsMui',
  title: 'Button Settings MUI',
  type: 'object',
  fields: [
    {
      name: 'variant',
      title: `Choose between 'Filled', 'Outlined', or 'Text only'.`,
      type: 'string',
      options: {
        list: [
          { title: 'Filled', value: 'contained' },
          { title: 'Outlined', value: 'outlined' },
          { title: 'Text only', value: 'text' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'contained',
    },
    {
      name: 'padding',
      title: 'Button padding',
      type: 'string',
      description: `Accept string as per padding CSS variable. See https://developer.mozilla.org/en-US/docs/Web/CSS/padding.`,
    },
    {
      name: 'borderRadius',
      title: 'Button border radius',
      type: 'string',
      description: `Accept string as per border-radius CSS variable. See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius.`,
      initialValue: '4px',
    },
    {
      name: 'disableElevation',
      title: 'Disable elevation',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'disableFocusRipple',
      title: 'Disable focus ripple',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'disableRipple',
      title: 'Disable ripple',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'fullWidth',
      title: 'Make button full width',
      type: 'boolean',
      initialValue: false,
    },
  ],
};
