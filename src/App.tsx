import React from 'react';
import { Icon } from './assets/icons/Icon';
import Container from './layouts/container/Container';
import styles from './App.module.css';

function App() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  return (
    <div className={styles.header}>
      <Container>
        <p>{screenWidth}</p>
        <p>{screenHeight}</p>
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
      </Container>
    </div>
  );
}

export default App;
