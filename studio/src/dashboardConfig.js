export default {
  widgets: [
    {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'Techboomers reverse proxy site',
            apiId: '6d592621-67e0-401a-b18a-77aa6644da0b',
            buildHookId: '6381470527e2837c40f48c8a',
            name: 'techboomers',
          },
        ],
      },
    },
    {
      name: 'gatsby',
      options: {
        title: 'Gatsby Preview Site',
        sites: [{ siteUrl: 'https://preview-techboomers.gatsbyjs.io' }],
      },
    },
  ],
};
