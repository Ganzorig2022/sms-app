'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type Props = {};

const LeftSidebar = (props: Props) => {
  const [isMessageClicked, setIsMessageClicked] = useState(false);
  const [isWalletClicked, setIsWalletClicked] = useState(false);
  const [isSettingsClicked, setIsSettingsClicked] = useState(false);

  return (
    <div className='flex h-screen fixed top-0 left-0 z-30'>
      <div className='flex flex-col w-[250px] z-30 bg-[#1e2757]'>
        <div className='flex border-b text-white'>
          <Link href='/dashboard'>
            <Image
              src='/logo/logo.svg'
              style={{ padding: '1rem' }}
              width={25}
              height={25}
              alt='website logo'
            />
          </Link>
        </div>
        <div className='flex flex-col space-y-5 '>
          <Link
            href='/dashboard'
            className='flex gap-2 hover:bg-slate-600 p-2 pl-4'
          >
            <Image
              src='/icon/dashboard (1).png'
              width={25}
              height={25}
              alt=''
            />
            <span className='text-slate-300'>Дашбоард</span>
          </Link>

          <Link
            href='/message'
            className='flex gap-2 hover:bg-slate-600 p-2 pl-4'
            onClick={() => setIsMessageClicked(!isMessageClicked)}
          >
            <Image src='/icon/sms.png' width={25} height={25} alt='' />
            <span className='text-slate-300'>Mессеж</span>
          </Link>

          {isMessageClicked && (
            <div className='ml-6'>
              <Link
                href='/message/send'
                className='flex gap-2 hover:bg-slate-600 p-2 pl-4'
              >
                <Image src='/icon/mail.png' width={25} height={25} alt='' />
                <span className='text-slate-300'>Илгээх</span>
              </Link>
              <Link
                href='/message/history'
                className='flex gap-2 hover:bg-slate-600 p-2 pl-4'
              >
                <Image src='/icon/refresh.png' width={25} height={25} alt='' />
                <span className='text-slate-300'>Түүх</span>
              </Link>
            </div>
          )}

          <Link
            href='/invoice'
            className='flex gap-2 hover:bg-slate-600 p-2 pl-4'
          >
            <Image src='/icon/invoice.png' width={25} height={25} alt='' />
            <span className='text-slate-300'>Нэхэмжлэх</span>
          </Link>

          <Link
            href='/wallet'
            className='flex gap-2 hover:bg-slate-600 p-2 pl-4'
          >
            <Image src='/icon/wallet.png' width={25} height={25} alt='' />
            <span className='text-slate-300'>Хэтэвч</span>
          </Link>

          <Link
            href='/settings'
            className='flex gap-2 hover:bg-slate-600 p-2 pl-4'
            onClick={() => setIsSettingsClicked(!isSettingsClicked)}
          >
            <Image src='/icon/gear.png' width={25} height={25} alt='' />
            <span className='text-slate-300'>Тохиргоо</span>
          </Link>
          {isSettingsClicked && (
            <div className='ml-6'>
              <Link
                href='/message/send'
                className='flex gap-2 hover:bg-slate-600 p-2 pl-4'
              >
                <Image src='/icon/mail.png' width={25} height={25} alt='' />
                <span className='text-slate-300'>Бүлэг</span>
              </Link>
              <Link
                href='/message/history'
                className='flex gap-2 hover:bg-slate-600 p-2 pl-4'
              >
                <Image src='/icon/refresh.png' width={25} height={25} alt='' />
                <span className='text-slate-300'>Нэхэмжлэл</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
