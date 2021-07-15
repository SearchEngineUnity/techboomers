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
    {
      name: 'tone',
      title: 'Is this a dark color or a light color?',
      description: 'This will be used to determine the overlay color on press.',
      type: 'string',
      options: {
        list: ['light', 'dark'],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      color: 'color',
      tone: 'tone',
    },
    prepare({ title, color, tone }) {
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
              color: tone === 'light' ? '#000' : '#FFF',
              fontSize: '24px',
              alignItems: 'center',
            }}
          >
            <span>T</span>
          </div>
        ),
      };
    },
  },
};
