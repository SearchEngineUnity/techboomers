// Testing dynamic rendering of icons by using this helper hook
// the place this is called to has been removed from code

import React from 'react';
import * as MuiIcons from '@material-ui/icons';

const DynamicIcons = ({ iconName }) => <>{MuiIcons[iconName]}</>;

export default DynamicIcons;
