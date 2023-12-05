import React from 'react';
import { Icon } from '../../assets/icons/Icon';
import s from './sociallinks.module.css';

const SocialLinks = () => {
  return (
    <div className={s.container}>
      <a
        href="https://www.instagram.com/mike4soul"
        target="_blank"
        rel="noreferrer"
        aria-label="@mike4soul instagram"
      >
        <Icon type="instagram" color="#fff" width={30} height={30}></Icon>
      </a>
      <a
        href="https://www.youtube.com/@mishakrasnonos6333"
        target="_blank"
        rel="noreferrer"
        aria-label="@mishakrasnonos6333 youtube"
      >
        <Icon type="youtube" color="#fff" width={30} height={30}></Icon>
      </a>
      <a
        href="mailto:mikhailkrasnonos@gmail.com"
        target="_blank"
        rel="noreferrer"
        aria-label="mikhailkrasnonos@gmail.com mail"
      >
        <Icon type="mail" color="#fff" width={30} height={30}></Icon>
      </a>
      <a
        href="https://www.facebook.com/misha.krasnonos"
        target="_blank"
        rel="noreferrer"
        aria-label="mikhailkrasnonos@gmail.com faceBook"
      >
        <Icon type="faceBook" color="#fff" width={30} height={30}></Icon>
      </a>
      <a
        href="https://www.tiktok.com/@flyingmying"
        target="_blank"
        rel="noreferrer"
        aria-label="@flyingmying tikTok"
      >
        <Icon type="tikTok" color="#fff" width={30} height={30}></Icon>
      </a>
      <a
        href="https://t.me/Misha4soul"
        target="_blank"
        rel="noreferrer"
        aria-label="@Misha4soul telegram"
      >
        <Icon type="telegram" color="#fff" width={30} height={30}></Icon>
      </a>
    </div>
  );
};

export default SocialLinks;
