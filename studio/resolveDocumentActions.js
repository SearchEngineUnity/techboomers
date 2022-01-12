// resolveDocumentActions.js

// import the default document actions
import defaultResolve from 'part:@sanity/base/document-actions';

import { PreviewAction } from './PreviewAction';

export default function resolveDocumentActions(props) {
  return [PreviewAction, ...defaultResolve(props)];
}
