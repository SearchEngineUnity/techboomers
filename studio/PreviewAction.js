/* eslint-disable import/prefer-default-export */
// need to set up prview_url based on env veriables...
import { VscPreview } from 'react-icons/vsc';

export function PreviewAction(props) {
  const PREVIEW_URL = 'https://preview-sitebuilderv1.gtsb.io'; // update to proper URL
  const isDraft = !!props.draft; // eslint-disable-line
  const isPublished = !!props.published; // eslint-disable-line
  const { type, draft, published } = props;
  let slug = '';

  if (isDraft) {
    if (draft.slug) {
      slug = draft.slug.current === '/' ? '/' : draft.slug.current;
    }
  } else if (isPublished) {
    if (published.slug) {
      slug = published.slug.current === '/' ? '/' : published.slug.current;
    }
  }

  if ((type === 'page' || type === 'soloGuidePage' || type === 'flexListingPage') && slug) {
    return {
      label: 'Preview',
      icon: VscPreview,
      onHandle: () => {
        // Here you can perform your actions
        fetch(
          'https://webhook.gatsbyjs.com/hooks/data_source/03343b3c-af8d-4746-a499-0d3407542e4b',
          {
            method: 'POST',
          },
        ).then((res) => {
          console.log('Request complete! response:', res);
        });
        // https://webhook.gatsbyjs.com/hooks/data_source/03343b3c-af8d-4746-a499-0d3407542e4b
        window.open(`${PREVIEW_URL}/${slug}`, '_blank');
      },
    };
  }

  return null;
}
