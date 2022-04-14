/* eslint-disable import/prefer-default-export */
// need to set up prview_url based on env veriables...
import { VscPreview } from 'react-icons/vsc';

const gatsbyPreviewUrl = process.env.SANITY_STUDIO_GATSBY_PREVIEW_URL;

export function PreviewAction({ published, draft, type }) {
  // const isDraft = !!props.draft; // eslint-disable-line
  // const isPublished = !!props.published; // eslint-disable-line
  // const { type, draft, published } = props;
  // let slug = '';

  // if (isDraft) {
  //   if (draft.slug) {
  //     slug = draft.slug.current === '/' ? '/' : draft.slug.current;
  //   }
  // } else if (isPublished) {
  //   if (published.slug) {
  //     slug = published.slug.current === '/' ? '/' : published.slug.current;
  //   }
  // }

  if (type === 'page' || type === 'soloGuidePage' || type === 'flexListingPage') {
    const doc = draft || published;

    let slug;

    if (published) {
      slug = published.slug.current === '/' ? '' : published.slug.current;
    } else if (draft) {
      slug = draft.slug.current === '/' ? '' : draft.slug.current;
    }

    console.log(type);
    console.log(slug);
    return {
      label: 'Preview',
      disabled: !doc,
      icon: VscPreview,
      onHandle: () => {
        // Here you can perform your actions
        fetch(
          'https://webhook.gatsbyjs.com/hooks/data_source/03343b3c-af8d-4746-a499-0d3407542e4b',
          {
            method: 'POST',
            headers: {
              'x-gatsby-cloud-data-source': 'gatsby-source-sanity',
            },
          },
        ).then((res) => {
          console.log('Request complete! response:', res);
        });
        window.open(`${gatsbyPreviewUrl}/${slug}`, '_blank');
      },
    };
  }

  return null;
}
