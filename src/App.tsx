import React, { useState } from 'react';
import Container from './layouts/container/Container';
import SocialLinks from './components/socialLinks/sociallinks';
import Background from './components/background/background';
import AvatarBlock from './components/avatarBlock/avatarBlock';
import s from './App.module.css';
import ReactPlayer from 'react-player';

function App() {
  const [onReady, setOnReady] = useState(false);

  return (
    <Container>
      <Background />
      <AvatarBlock />
      <SocialLinks />
      <div className={s.container}>
        {!onReady && <h1 className={s.h1}>Loading...</h1>}
        <div className={s.back} />
        <ReactPlayer
          className={s.video}
          controls={false}
          url="https://www.youtube.com/watch?v=E1ce1zNMRJU&ab_channel=MishaKrasnonos"
          playing={onReady}
          onReady={() => setOnReady(true)}
        />
      </div>
    </Container>
  );
}

export default App;
