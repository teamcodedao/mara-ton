'use client';

import Image from 'next/image';

import logoImg from './logo.svg';
import {useMemo} from 'react';

interface LogoProps {
  containerWidth: number;
  containerHeight: number;
}

export default function Logo({containerWidth, containerHeight}: LogoProps) {
  const bound = useMemo(() => {
    return {
      left: (containerWidth * 800) / 1440,
      bottom: (containerHeight * 110) / 1280,
    };
  }, [containerHeight, containerWidth]);

  return (
    <div
      className='absolute'
      style={{
        bottom: bound.bottom,
        left: bound.left,
      }}
    >
      <Image src={logoImg} quality={100} alt='' />
    </div>
  );
}
