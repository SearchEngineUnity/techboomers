// need to set up prview_url based on env veriables...

export default function PreviewAction(props) {
  const PREVIEW_URL = 'https://cp-studio-preview.herokuapp.com'; // update to proper URL
  const draft = !!props.draft; // eslint-disable-line
  const published = !!props.published; // eslint-disable-line
  const { type } = props;
  let slug = '';

  if (type === 'page') {
    if (draft) {
      if (props.draft.slug) {
        slug = props.draft.slug.current === '/' ? '' : props.draft.slug.current;
      }
    } else if (published) {
      if (props.published.slug) {
        slug = props.published.slug.current === '/' ? '' : props.published.slug.current;
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

  return null;
}
