import { MdColorize } from 'react-icons/md';
import React from 'react';

export default {
  name: 'colorOption',
  type: 'document',
  title: 'Color Option',
  icon: MdColorize,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'color',
      title: 'Color',
      type: 'color',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      title: 'name',
      color: 'color',
    },
    prepare({ title, color }) {
      return {
        title,
        media: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              backgroundColor: `${color.hex}${color.alpha < 1 ? color.alpha * 100 : ''}`,
              fontSize: '24px',
              alignItems: 'center',
            }}
          />
        ),
      };
    },
  },
};
