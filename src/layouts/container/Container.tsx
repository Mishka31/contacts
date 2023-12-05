import React from 'react';
import { ContainerProps } from '../../interfaces';
import styles from './Container.module.css';

function Container({ children }: ContainerProps) {
  return <div className={styles.container}>{children}</div>;
}

export default Container;
