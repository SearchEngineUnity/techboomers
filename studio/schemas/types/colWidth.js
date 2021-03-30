import { AiOutlineColumnWidth } from 'react-icons/ai';

export default {
  name: 'colWidth',
  type: 'object',
  title: 'Table Column Width',
  icon: AiOutlineColumnWidth,
  fields: [
    {
      name: 'width',
      type: 'number',
      title: 'Width in %',
    },
  ],
  preview: {
    select: {
      title: 'width',
    },
    prepare({ title }) {
      return {
        title: `${title}%`,
      };
    },
  },
};
