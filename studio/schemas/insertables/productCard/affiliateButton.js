import { BsBootstrap } from 'react-icons/bs';

export default {
  name: 'affiliateButton',
  title: 'Affiliate Button',
  type: 'object',
  icon: BsBootstrap,
  fields: [
    {
      name: 'idTag',
      title: 'Button ID',
      type: 'string',
      description: 'Add ID to the button. Please only use alphanumeric characters and hypen.',
    },
    {
      name: 'text',
      title: 'Button Text',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
    {
      name: 'design', // fix to btnDesign for V2
      title: 'Button Design Option',
      type: 'reference',
      to: [{ type: 'btnDesignMui' }],
    },
  ],
  preview: {
    select: {
      text: 'text',
      id: 'idTag',
    },
    prepare({ text, id }) {
      return {
        title: text,
        subtitle: `ID: ${id}`,
      };
    },
  },
};
