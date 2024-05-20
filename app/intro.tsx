'use client';

export default function Intro() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload='auto'
      width={620}
      className='object-cover absolute'
      style={{
        top: 610,
        left: 410,
      }}
    >
      <source src='/intro.mp4' type='video/mp4' />
    </video>
  );
}
