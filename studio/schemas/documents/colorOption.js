import { FaBullseye } from 'react-icons/fa';
import React from 'react';

export default {
  name: 'colorOption',
  type: 'document',
  title: 'Color Option',
  icon: FaBullseye,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'color',
      title: 'Color',
      type: 'color',
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
              width: '100%',
              height: '100%',
              backgroundColor: `${color.hex}${color.alpha < 1 ? color.alpha * 100 : ''}`,
            }}
          />
        ),
      };
    },
  },
};
