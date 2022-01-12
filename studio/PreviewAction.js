/* eslint-disable import/prefer-default-export */
// need to set up prview_url based on env veriables...
import { VscPreview } from 'react-icons/vsc';

export function PreviewAction(props) {
  console.log(props);
  const PREVIEW_URL = 'https://preview-sitebuildermui.gtsb.io'; // update to proper URL
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

  if ((type === 'page' || type === 'spGuide' || type === 'listingPage') && slug) {
    return {
      label: 'Preview',
      icon: VscPreview,
      onHandle: () => {
        // Here you can perform your actions
        window.open(`${PREVIEW_URL}/${slug}`, '_blank');
      },
    };
  }

  return null;
}
