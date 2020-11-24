const path = require('path');

// create all structured pages except for /guides
async function creteStructuredPages(actions, graphql) {
  const { data } = await graphql(`
    {
      allSanityPage(filter: { slug: { current: { ne: "guide" } } }) {
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

  const pages = data.allSanityPage.edges;
  pages.forEach((page) => {
    actions.createPage({
      path: page.node.slug.current === '/' ? '/' : `/${page.node.slug.current}`,
      component: path.resolve(`./src/templates/structuredPage.js`),
      context: {
        slug: page.node.slug.current,
      },
    });
  });
}

exports.createPages = async ({ actions, graphql }) => {
  await creteStructuredPages(actions, graphql);
};
