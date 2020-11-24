export default {
  title: 'Twitter Share',
  name: 'twitterTag',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Optimal length is under 70 characters',
      validation: (Rule) => [Rule.max(70).warning('Length over optimal')],
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      description: 'Optimal length is under 200 characters',
      validation: (Rule) => [Rule.max(200).warning('Length over optimal')],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
