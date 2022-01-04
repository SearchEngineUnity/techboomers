import { FiPhoneCall } from 'react-icons/fi';

export default {
  title: 'Call us',
  name: 'navPhone',
  type: 'object',
  description: 'Only functional for main header and not main footer.',
  icon: FiPhoneCall,
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Call us text',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      name: 'text',
    },
    prepare({ name }) {
      return {
        title: name,
        subtitle: 'Links to company phone #',
      };
    },
  },
};
