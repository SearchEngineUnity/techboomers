export default {
  title: 'External Link',
  name: 'externalLink',
  type: 'object',
  fields: [
    {
      title: 'URL',
      name: 'href',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ['https', 'http', 'mailto', 'tel'],
        }),
    },
    {
      title: 'Open in new tab?',
      name: 'newTab',
      type: 'boolean',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      link: 'href',
    },
    prepare({ link }) {
      return {
        title: link,
      };
    },
  },
};
