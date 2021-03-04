import { FaBullseye } from 'react-icons/fa';

export default {
  name: 'typography',
  type: 'document',
  title: 'Typography',
  __experimental_actions: ['create', 'update', 'publish'],
  icon: FaBullseye,
  fieldsets: [
    {
      name: 'general',
      title: 'General',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'variants',
      title: 'Variants',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      name: 'htmlFontSize',
      title: 'HTML Font Size (Root)',
      type: 'number',
      fieldset: 'general',
    },
    {
      name: 'fontFamily',
      title: 'Font Family',
      type: 'string',
      fieldset: 'general',
    },
    {
      name: 'fontSize',
      title: 'Font Size',
      type: 'number',
      fieldset: 'general',
    },
    {
      name: 'fontWeightLight',
      title: 'Font Weight Light',
      type: 'number',
      fieldset: 'general',
    },
    {
      name: 'fontWeightRegular',
      title: 'Font Weight Regular',
      type: 'number',
      fieldset: 'general',
    },
    {
      name: 'fontWeightMedium',
      title: 'Font Weight Medium',
      type: 'number',
      fieldset: 'general',
    },
    {
      name: 'fontWeightBold',
      title: 'Font Weight Bold',
      type: 'number',
      fieldset: 'general',
    },
    {
      name: 'h1',
      title: 'H1',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
    },
    {
      name: 'h2',
      title: 'H2',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
    },
    {
      name: 'h3',
      title: 'H3',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
    },
    {
      name: 'h4',
      title: 'H4',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
    },
    {
      name: 'h5',
      title: 'H5',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
    },
    {
      name: 'subtitle1',
      title: 'Subtitle 1',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
    },
    {
      name: 'subtitle2',
      title: 'Subtitle 2',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
    },
    {
      name: 'body1',
      title: 'Body 1',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
    },
    {
      name: 'body2',
      title: 'Body 2',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
    },
    {
      name: 'button',
      title: 'Button',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
    },
    {
      name: 'caption',
      title: 'caption',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
    },
    {
      name: 'overline',
      title: 'Overline',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
    },
  ],
};
