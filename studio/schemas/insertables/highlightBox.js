import { MdSimCardAlert } from 'react-icons/md';

export default {
  name: 'highlightBox',
  title: 'Highlight Box',
  type: 'object',
  icon: MdSimCardAlert,
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: ['Pro Tip', 'Important', 'Warning', 'Did You Know', 'Definition'],
      },
    },
    {
      name: 'text',
      title: 'Text',
      type: 'highlightBoxBlockContent',
    },
  ],
  preview: {
    select: {
      type: 'type',
    },
    prepare({ type }) {
      return {
        title: type,
        subtitle: 'Highlight Box',
      };
    },
  },
};
