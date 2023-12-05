import React, { FC } from 'react';

import * as allIcons from './index';
import { IIconsProps } from '../../interfaces';

export type typeIcons =
  | 'pencil'
  | 'lock'
  | 'instagram'
  | 'youtube'
  | 'mail'
  | 'faceBook'
  | 'tikTok'
  | 'telegram';

export const Icon: FC<IIconsProps> = ({ type, width, height, color }) => {
  const svgItems = [
    { name: 'lock', component: () => allIcons.lock({ width, height }) },
    { name: 'pencil', component: () => allIcons.pencil({ width, height }) },
    { name: 'instagram', component: () => allIcons.instagram({ width, height, color }) },
    { name: 'youtube', component: () => allIcons.youtube({ width, height, color }) },
    { name: 'mail', component: () => allIcons.mail({ width, height, color }) },
    { name: 'faceBook', component: () => allIcons.faceBook({ width, height, color }) },
    { name: 'tikTok', component: () => allIcons.tikTok({ width, height, color }) },
    { name: 'telegram', component: () => allIcons.telegram({ width, height, color }) },
  ];
  return <>{svgItems.filter((x) => x.name === type)[0]?.component()}</>;
};
