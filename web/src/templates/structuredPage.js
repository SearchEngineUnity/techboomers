import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../containers/layout';
import SEO from '../components/Seo';
import LrHero from '../components/LrFlexHero';
import LrFlex from '../components/StructuredLrFlex';
import StackFlex from '../components/StackFlex';

import {
  mapLrHeroToProps,
  mapSeoToProps,
  mapLrFlexToProps,
  mapStackFlexToProps,
} from '../lib/mapToProps';

// eslint-disable-next-line import/prefer-default-export
export const query = graphql`
  query PageTemplate($slug: String) {
    page: sanityPage(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      sections {
        ... on SanityLrHero {
          _key
          _type
          blocks {
            ... on SanityBtnBlockMui {
              _key
              _type
              idTag
              btnAlignment
              link {
                ... on SanityJumpLink {
                  _key
                  _type
                  hashId
                }
                ... on SanityInternalLink {
                  _key
                  _type
                  reference {
                    ... on SanityPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanitySpGuide {
                      id
                      slug {
                        current
                      }
                    }
                  }
                }
                ... on SanityExternalLink {
                  _key
                  _type
                  href
                }
              }
              text
              design {
                settings {
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  fullWidth
                  size
                  variant
                }
                colors {
                  contrastText {
                    color {
                      hex
                      alpha
                    }
                    tone
                  }
                  dark {
                    tone
                    color {
                      alpha
                      hex
                    }
                  }
                  main {
                    tone
                    color {
                      alpha
                      hex
                    }
                  }
                }
              }
            }
            ... on SanityImageBlock {
              _key
              _type
              alt
              _rawAsset(resolveReferences: { maxDepth: 10 })
              maxHeight
              maxWidth
              caption
            }
            ... on SanityHeroBlock {
              _key
              _type
              _rawFooter(resolveReferences: { maxDepth: 10 })
              _rawText(resolveReferences: { maxDepth: 10 })
              header {
                heading
                _rawSubtitle(resolveReferences: { maxDepth: 10 })
              }
              headerAlignment
            }
            ... on SanityVideoBlock {
              _key
              _type
              url
              ratio
            }
          }
          idTag
          layout
          reverseOrder
          colorSettings {
            background {
              color {
                hex
                alpha
              }
            }
            footer {
              color {
                hex
                alpha
              }
            }
            foreground {
              color {
                hex
                alpha
              }
            }
            heading {
              color {
                hex
                alpha
              }
            }
            link {
              color {
                hex
                alpha
              }
            }
            subtitle {
              color {
                alpha
                hex
              }
            }
          }
          _rawFooter(resolveReferences: { maxDepth: 10 })
          header {
            heading
            _rawSubtitle(resolveReferences: { maxDepth: 10 })
          }
          blockAlignment
          footerAlignment
          headerAlignment
        }
        ... on SanityLrFlex {
          _key
          _type
          _rawFooter(resolveReferences: { maxDepth: 10 })
          blockAlignment
          headerAlignment
          footerAlignment
          blocks {
            ... on SanityImageBlock {
              _key
              _type
              alt
              _rawAsset(resolveReferences: { maxDepth: 10 })
              maxHeight
              maxWidth
              caption
            }
            ... on SanitySectionBlock {
              _key
              _type
              _rawText(resolveReferences: { maxDepth: 10 })
              header {
                _rawSubtitle(resolveReferences: { maxDepth: 10 })
                heading
              }
              _rawFooter(resolveReferences: { maxDepth: 10 })
              headerAlignment
              footerAlignment
            }
            ... on SanityVideoBlock {
              _key
              _type
              url
              ratio
            }
            ... on SanityBtnBlockMui {
              _key
              _type
              btnAlignment
              link {
                ... on SanityJumpLink {
                  _key
                  _type
                  hashId
                }
                ... on SanityInternalLink {
                  _key
                  _type
                  reference {
                    ... on SanityPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanitySpGuide {
                      id
                      slug {
                        current
                      }
                    }
                  }
                }
                ... on SanityExternalLink {
                  _key
                  _type
                  href
                }
              }
              text
              design {
                settings {
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  fullWidth
                  size
                  variant
                }
                colors {
                  contrastText {
                    color {
                      hex
                      alpha
                    }
                    tone
                  }
                  dark {
                    tone
                    color {
                      alpha
                      hex
                    }
                  }
                  main {
                    tone
                    color {
                      alpha
                      hex
                    }
                  }
                }
              }
            }
          }
          header {
            heading
            _rawSubtitle(resolveReferences: { maxDepth: 10 })
          }
          idTag
          layout
          reverseOrder
          colorSettings {
            background {
              color {
                hex
                alpha
              }
            }
            footer {
              color {
                hex
                alpha
              }
            }
            foreground {
              color {
                hex
                alpha
              }
            }
            heading {
              color {
                hex
                alpha
              }
            }
            link {
              color {
                hex
                alpha
              }
            }
            subtitle {
              color {
                alpha
                hex
              }
            }
          }
        }
        ... on SanityStackFlex {
          _key
          _type
          _rawFooter(resolveReferences: { maxDepth: 10 })
          blockWidth
          footerAlignment
          headerAlignment
          idTag
          header {
            heading
            _rawSubtitle(resolveReferences: { maxDepth: 10 })
          }
          blocks {
            ... on SanityBtnBlockMui {
              _key
              _type
              btnAlignment
              link {
                ... on SanityJumpLink {
                  _key
                  _type
                  hashId
                }
                ... on SanityInternalLink {
                  _key
                  _type
                  reference {
                    ... on SanityPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanitySpGuide {
                      id
                      slug {
                        current
                      }
                    }
                  }
                }
                ... on SanityExternalLink {
                  _key
                  _type
                  href
                }
              }
              text
              design {
                settings {
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  fullWidth
                  size
                  variant
                }
                colors {
                  contrastText {
                    color {
                      hex
                      alpha
                    }
                    tone
                  }
                  dark {
                    tone
                    color {
                      alpha
                      hex
                    }
                  }
                  main {
                    tone
                    color {
                      alpha
                      hex
                    }
                  }
                }
              }
            }
            ... on SanityImageBlock {
              _key
              _type
              alt
              _rawAsset(resolveReferences: { maxDepth: 10 })
              maxHeight
              maxWidth
              caption
            }
            ... on SanitySectionBlock {
              _key
              _type
              _rawText(resolveReferences: { maxDepth: 10 })
              header {
                _rawSubtitle(resolveReferences: { maxDepth: 10 })
                heading
              }
              _rawFooter(resolveReferences: { maxDepth: 10 })
              headerAlignment
              footerAlignment
            }
            ... on SanityVideoBlock {
              _key
              _type
              url
              ratio
            }
          }
          colorSettings {
            background {
              color {
                hex
                alpha
              }
            }
            footer {
              color {
                hex
                alpha
              }
            }
            foreground {
              color {
                hex
                alpha
              }
            }
            heading {
              color {
                hex
                alpha
              }
            }
            link {
              color {
                hex
                alpha
              }
            }
            subtitle {
              color {
                alpha
                hex
              }
            }
          }
        }
      }
      slug {
        current
      }
      title
      description
      twitter {
        description
        title
      }
      nofollow
      noindex
      facebook {
        description
        image {
          asset {
            url
          }
        }
        title
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

const StructuredPage = ({ data, location }) => {
  const type = 'page';

  return (
    <Layout location={location}>
      <SEO {...mapSeoToProps(data.page, data.site.siteMetadata.siteUrl, type)} />
      <main>
        {data.page.sections.map((section) => {
          const { _type } = section;
          switch (_type) {
            case 'lrHero':
              return <LrHero key={section._key} {...mapLrHeroToProps(section)} />;

            case 'lrFlex':
              return <LrFlex key={section._key} {...mapLrFlexToProps(section)} />;

            case 'stackFlex':
              return <StackFlex key={section._key} {...mapStackFlexToProps(section)} />;

            default:
              return <div>Still under development</div>;
          }
        })}
      </main>
    </Layout>
  );
};

export default StructuredPage;
