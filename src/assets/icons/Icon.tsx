import React, { FC } from 'react';

import * as allIcons from './index';
import { IIconsProps } from '../../interfaces';

export type typeIcons = 'pencil' | 'lock' | 'instagram' | 'youtube' | 'mail';

export const Icon: FC<IIconsProps> = ({ type, width, height, color }) => {
  const svgItems = [
    { name: 'lock', component: () => allIcons.lock({ width, height }) },
    { name: 'pencil', component: () => allIcons.pencil({ width, height }) },
    { name: 'instagram', component: () => allIcons.instagram({ width, height, color }) },
    { name: 'youtube', component: () => allIcons.youtube({ width, height, color }) },
    { name: 'mail', component: () => allIcons.mail({ width, height, color }) },
  ];
  return <>{svgItems.filter((x) => x.name === type)[0]?.component()}</>;
};
