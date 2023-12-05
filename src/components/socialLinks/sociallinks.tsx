import React from 'react';
import { Icon } from '../../assets/icons/Icon';
import s from './sociallinks.module.css';

const SocialLinks = () => {
  return (
    <div className={s.container}>
      <a href="https://www.instagram.com/mike4soul" target="_blank" rel="noreferrer">
        <Icon type="instagram" color="#fff" width={30} height={30}></Icon>
      </a>
      <a href="https://www.youtube.com/@mishakrasnonos6333" target="_blank" rel="noreferrer">
        <Icon type="youtube" color="#fff" width={30} height={30}></Icon>
      </a>
      <a href="mailto:mikhailkrasnonos@gmail.com" target="_blank" rel="noreferrer">
        <Icon type="mail" color="#fff" width={30} height={30}></Icon>
      </a>
      <a href="https://www.facebook.com/misha.krasnonos" target="_blank" rel="noreferrer">
        <Icon type="faceBook" color="#fff" width={30} height={30}></Icon>
      </a>
      <a href="https://www.tiktok.com/@flyingmying" target="_blank" rel="noreferrer">
        <Icon type="tikTok" color="#fff" width={30} height={30}></Icon>
      </a>
      <a href="https://www.tiktok.com/@flyingmying" target="_blank" rel="noreferrer">
        <Icon type="telegram" color="#fff" width={30} height={30}></Icon>
      </a>
    </div>
  );
};

export default SocialLinks;
