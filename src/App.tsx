import Container from './layouts/container/Container';
import SocialLinks from './components/socialLinks/sociallinks';
import Background from './components/background/background';
import AvatarBlock from './components/avatarBlock/avatarBlock';
import VideoBlock from './components/videoBlock/videoBlock';
import s from './App.module.css';

function App() {
  return (
    <Container>
      <Background />
      <AvatarBlock />
      <SocialLinks />
      <VideoBlock />
    </Container>
  );
}

export default App;
