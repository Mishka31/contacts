import React from 'react';
import Container from './layouts/container/Container';
import SocialLinks from './components/socialLinks/sociallinks';
import Background from './components/background/background';
import s from './App.module.css';

function App() {
  return (
    <Container>
      <Background />
      <div className={s.container}>
        <img
          className={s.img}
          src="https://scontent-iev1-1.xx.fbcdn.net/v/t39.30808-6/321751407_1487309588420540_8675258260965107263_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=XVlRE0m_aSoAX96vmgO&_nc_ht=scontent-iev1-1.xx&oh=00_AfBWtam4BQqP9367QLjGA7_rznQXRQTNrrvRYAX67MzSKA&oe=65747F4A"
          alt=""
        />
        <h1 className={s.nick}>@mike4soul</h1>

        <h2 className={s.description}>
          If you are not motivated by the result of your work, it is not yours ¯\_(ツ)_/¯
        </h2>
      </div>
      <SocialLinks />
    </Container>
  );
}

export default App;
