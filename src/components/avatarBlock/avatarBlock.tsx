import React from 'react';
import s from './avatarBlock.module.css';
import avatar from '../../assets/images/avatar.jpg';

const AvatarBlock = () => {
  return (
    <div className={s.container}>
      <img className={s.img} src={avatar} alt="" />
      <h1 className={s.nick}>@mike4soul</h1>

      <h2 className={s.description}>
        If you are not motivated by the result of your work, it is not yours ¯\_(ツ)_/¯
      </h2>
    </div>
  );
};

export default AvatarBlock;
