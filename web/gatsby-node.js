const path = require('path');

// create individual guides
async function createGuide(actions, graphql) {
  const { data } = await graphql(`
    {
      allSanitySpGuide {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);

  const guides = data.allSanitySpGuide.edges;
  guides.forEach((guide) => {
    actions.createPage({
      path: `/${guide.node.slug.current}`,
      component: path.resolve(`./src/templates/guide.js`),
      context: {
        slug: guide.node.slug.current,
      },
    });
  });
}

// create redirect
async function createPageRedirects(actions, graphql) {
  const { data } = await graphql(`
    {
      allSanityRedirect {
        edges {
          node {
            redirectPaths
            redirectTo
          }
        }
      }
    }
  `);

  const redirectEdges = data.allSanityRedirect.edges;
  redirectEdges.forEach((edge) => {
    const { redirectPaths, redirectTo } = edge.node;
    const toPath = redirectTo;

    redirectPaths.forEach((fromPath) => {
      actions.createRedirect({
        fromPath,
        toPath,
        isPermanent: true,
        force: true,
      });
    });
  });
}

exports.createPages = async ({ actions, graphql }) => {
  await createGuide(actions, graphql);
  await createPageRedirects(actions, graphql);
};
