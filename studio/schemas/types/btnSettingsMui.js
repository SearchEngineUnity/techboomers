export default {
  name: 'btnSettingsMui',
  title: 'Button Settings MUI',
  type: 'object',
  fields: [
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
    {
      name: 'size',
      title: 'Button Size',
      type: 'string',
      options: {
        list: ['small', 'medium', 'large'],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'medium',
    },
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
  ],
};
