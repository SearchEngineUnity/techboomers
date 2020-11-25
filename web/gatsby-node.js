const path = require('path');

// create all structured pages except for /guides
async function createStructuredPages(actions, graphql) {
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

// creat guides listing page (aka /guide)
async function createGuidesPage(actions, graphql) {
  const { data } = await graphql(`
    {
      allSanityPage(filter: { slug: { current: { eq: "guide" } } }) {
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
      path: `/${page.node.slug.current}`,
      component: path.resolve(`./src/templates/guide-page.js`),
      context: {
        slug: page.node.slug.current,
      },
    });
  });
}

// create individual guides
async function createGuide(actions, graphql) {
  const { data } = await graphql(`
    {
      allSanityGuide(filter: { isChapter: { ne: true } }) {
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

  const guides = data.allSanityGuide.edges;
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

// create MP guides
async function createMpGuide(actions, graphql) {
  const { data } = await graphql(`
    {
      allSanityMpGuide {
        edges {
          node {
            h1
            slug {
              current
            }
            chapters {
              title
              chapterGuide {
                slug {
                  current
                }
              }
            }
          }
        }
      }
    }
  `);

  const guides = data.allSanityMpGuide.edges;

  guides.forEach((guide) => {
    const chaptersArray = [
      {
        title: 'Introduction',
        link: `/${guide.node.slug.current}`,
      },
    ];
    guide.node.chapters.forEach((chapter) => {
      chaptersArray.push({
        title: chapter.title,
        link: `/${guide.node.slug.current}/${chapter.chapterGuide.slug.current}`,
      });
    });

    actions.createPage({
      path: `/${guide.node.slug.current}`,
      component: path.resolve(`./src/templates/mpGuide.js`),
      context: {
        slug: guide.node.slug.current,
        chaptersArray,
        mpTitle: guide.node.h1,
      },
    });

    guide.node.chapters.forEach((chapter) => {
      actions.createPage({
        path: `/${guide.node.slug.current}/${chapter.chapterGuide.slug.current}`,
        component: path.resolve(`./src/templates/chapter.js`),
        context: {
          slug: chapter.chapterGuide.slug.current,
          chaptersArray,
          mpTitle: guide.node.h1,
        },
      });
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
  await createStructuredPages(actions, graphql);
  await createGuidesPage(actions, graphql);
  await createGuide(actions, graphql);
  await createMpGuide(actions, graphql);
  await createPageRedirects(actions, graphql);
};
