// need to set up prview_url based on env veriables...

export default function PreviewAction(props) {
  console.log(props);
  const PREVIEW_URL = 'https://demo-centre.herokuapp.com'; // update to proper URL
  const isDraft = !!props.draft; // eslint-disable-line
  const isPublished = !!props.published; // eslint-disable-line
  const { type, draft, published } = props;
  let slug = '';

  if (type === 'page') {
    if (isDraft) {
      if (draft.slug) {
        slug = draft.slug.current === '/' ? '' : draft.slug.current;
      }
    } else if (isPublished) {
      if (published.slug) {
        slug = published.slug.current === '/' ? '' : published.slug.current;
      }
    }
  }

  if (type === 'page') {
    return {
      label: 'Preview',
      onHandle: () => {
        // Here you can perform your actions
        window.open(`${PREVIEW_URL}/${slug}`, '_blank');
      },
    };
  }

  if (type === 'mpGuide' || type === 'guide') {
    if (isDraft) {
      if (draft.slug) {
        slug = draft.slug.current;
      }
    } else if (isPublished) {
      if (published.slug) {
        slug = published.slug.current;
      }
    }
  }

  if (type === 'mpGuide' || type === 'guide') {
    return {
      label: 'Preview',
      onHandle: () => {
        // Here you can perform your actions
        if (draft?.isChapter || published?.isChapter) {
          window.open(`${PREVIEW_URL}/404`, '_blank');
        }
        window.open(`${PREVIEW_URL}/${slug}`, '_blank');
      },
    };
  }

  return null;
}
