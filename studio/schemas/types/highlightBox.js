import { MdSimCardAlert } from 'react-icons/md';

export default {
  name: 'highlightBox',
  title: 'Hightlight Box',
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
      type: 'simpleBlockContent',
    },
  ],
};
