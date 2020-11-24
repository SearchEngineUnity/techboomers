import defaultResolve from 'part:@sanity/base/document-actions';

import PreviewAction from './previewAction';

export default function resolveDocumentActions(props) {
  if (props.type === 'page') {
    return [PreviewAction, ...defaultResolve(props)];
  }
  return [...defaultResolve(props)];
}
