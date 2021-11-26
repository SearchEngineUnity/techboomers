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
    {
      name: 'tone',
      title: 'Is this a dark color or a light color?',
      description: 'Value currently not in use.',
      type: 'string',
      options: {
        list: ['light', 'dark'],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'light',
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
