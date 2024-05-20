'use client';

import Image from 'next/image';
import clsx from 'clsx';

import background from './background.png';
import Logo from './logo';
import Intro from './intro';

export default function Home() {
  return (
    <main className='relative overflow-auto w-[1440px] h-[1280px] mx-auto'>
      <Image
        src={background}
        quality={100}
        priority
        alt=''
        className='w-[1440px] h-[1280px] object-cover object-top'
      />
      <div className='absolute inset-0'>
        <div
          className={clsx('ml-20 mt-16 flex gap-x-8', '*:drop-shadow-default')}
        >
          <a href={process.env.NEXT_PUBLIC_TELEGRAM_URL} target='_telegram'>
            <img src='/telegram.svg' alt='' />
          </a>
          <a href={process.env.NEXT_PUBLIC_TWITTER_URL} target='_twitter'>
            <img src='/twitter.svg' alt='' />
          </a>
        </div>

        <div
          className={clsx(
            'mt-20 flex justify-between px-5 gap-x-10 gap-y-7 text-[40px]'
          )}
        >
          <div className='text-left'>
            <h1>Make American Rich Again</h1>
            <p>Symbol: MARA</p>
            <p>Supp: $100.000.000</p>
          </div>
          <div className='text-right text-white'>
            <p>Make American</p>
            <p>Rich Again</p>
            <p>- Donald J Trump</p>
          </div>
        </div>
        <Logo />
        <Intro />
      </div>
    </main>
  );
}
