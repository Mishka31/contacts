import React from 'react';
import Container from './layouts/container/Container';
import SocialLinks from './components/socialLinks/sociallinks';
import Background from './components/background/background';

function App() {
  return (
    <Container>
      <Background />
      <SocialLinks />
    </Container>
  );
}

export default App;
