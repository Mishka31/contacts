import React, { useState } from 'react';
import s from './videoBlock.module.css';
import ReactPlayer from 'react-player';

const VideoBlock = () => {
  const [onReady, setOnReady] = useState(false);
  return (
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
  );
};

export default VideoBlock;
