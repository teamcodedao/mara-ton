'use client';

import Image from 'next/image';

import logoImg from './logo.svg';

export default function Logo() {
  return (
    <div
      className='absolute'
      style={{
        bottom: 110,
        left: 780,
      }}
    >
      <Image src={logoImg} quality={100} alt='' />
    </div>
  );
}
