export default {
  widgets: [
    {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'Demo Centre - MUI',
            apiId: 'bcacf036-c46b-4b68-a17b-88732d2e8d7c',
            buildHookId: '60b667e99acf0500eabf9e8f',
            name: 'democentermui',
          },
        ],
      },
    },
    {
      name: 'gatsby',
      options: { sites: [{ siteUrl: 'https://preview-sitebuildermui.gtsb.io/' }] },
    },
  ],
};
