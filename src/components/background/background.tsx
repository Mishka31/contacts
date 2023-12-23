import React from 'react';
import s from './background.module.css';
import noise from '../../assets/images/noise.svg';

const Background = () => {
  return (
    <div className={s.container}>
      <div className={s.background} />
    </div>
  );
};

export default Background;
