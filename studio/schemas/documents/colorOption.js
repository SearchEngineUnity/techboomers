import { MdColorize } from 'react-icons/md';
import React from 'react';

export default {
  name: 'colorOption',
  type: 'document',
  title: 'Color Option',
  icon: MdColorize,
  fields: [
    {
      name: 'seuID',
      title: 'SEU ID',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'color',
      title: 'Select Color',
      type: 'color',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      label: 'label',
      color: 'color',
    },
    prepare({ label, color }) {
      return {
        title: label,
        media: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
              fontSize: '24px',
              alignItems: 'center',
            }}
          />
        ),
      };
    },
  },
};
