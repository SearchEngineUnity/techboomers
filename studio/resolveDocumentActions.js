/* eslint-disable import/no-unresolved */
import defaultResolve from 'part:@sanity/base/document-actions';

import PreviewAction from './previewAction';

export default function resolveDocumentActions(props) {
  if (props.type === 'page' || props.type === 'mpGuide' || props.type === 'spGuide') {
    return [PreviewAction, ...defaultResolve(props)];
  }
  return [...defaultResolve(props)];
}
