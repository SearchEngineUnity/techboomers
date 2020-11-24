export default {
  name: 'navJumpLink',
  type: 'object',
  title: 'Nav Jump Link',
  fields: [
    {
      title: 'Nav title',
      name: 'title',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
      description: 'Please enter the ID of the segment you would like to jump to',
    },
    {
      name: 'isButton',
      type: 'boolean',
      title: 'Apply Button Style?',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'link',
    },
  },
};
