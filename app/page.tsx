'use client';

import Image from 'next/image';
import clsx from 'clsx';
import useMeasure from 'react-use-measure';

import background from './background.png';
import Logo from './logo';

export default function Home() {
  const [ref, bounds] = useMeasure();

  return (
    <main className='min-h-screen relative'>
      <Image
        src={background}
        quality={100}
        priority
        alt=''
        className='w-full h-screen object-cover object-top'
      />
      <div ref={ref} className='absolute inset-0'>
        <div
          className={clsx(
            'ml-14 xl:ml-20 mt-12 xl:mt-16 flex gap-x-8',
            '*:drop-shadow-default'
          )}
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
            'mt-20 lg:mt-36 xl:mt-64 flex justify-between px-5 gap-x-10 gap-y-7 text-[40px]',
            'max-[745px]:multi-[`flex-col-reverse;*:flex-1;*:self-center;*:text-center`]'
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
        {bounds.width > 0 && (
          <Logo containerWidth={bounds.width} containerHeight={bounds.height} />
        )}
      </div>
    </main>
  );
}
