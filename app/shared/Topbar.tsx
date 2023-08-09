'use client';
import { Button } from '@/components/ui/button';
import useWindowSize from '@/hooks/useWindowSize';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {};

const Topbar = (props: Props) => {
  const { scrollY } = useWindowSize();
  const router = useRouter();

  const logout = (): void => {
    // setToken(undefined);
    // cookies.remove("token");
    // sessionStorage.removeItem("user_id");
    // sessionStorage.removeItem("userDetail");
    // sessionStorage.removeItem("navToDetail");
    router.push('/login');
    // dispatch({
    //   type: 'INIT',
    //   payload: {},
    // });
    // dispatch({
    //   type: 'USER_CHANGE',
    //   payload: {},
    // });
  };

  return (
    <div>
      <div className='fixed w-full left-0 right-0 z-20 bg-[#fff] border-2'>
        <div
          className='flex justify-between items-center ml-[250px] h-[66px]'
          style={{
            boxShadow:
              scrollY > 0 ? 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' : '',
          }}
        >
          <div className='flex justify-between items-center w-full '>
            <div className='ml-5'>
              <h2>
                <>
                  {/* <small>{username} GANZORIG admin</small> */}
                  <small> GANZORIG admin</small>
                </>
              </h2>
            </div>
            <div className='flex justify-between items-center space-x-4 px-0'>
              <Link href='/help'>
                <Button variant='outline'>
                  <div className='flex items-center space-x-2'>
                    <Image
                      src='/icon/customer-service.png'
                      width={20}
                      height={20}
                      alt='Customer Service Logo'
                    />
                    <span>Тусламж</span>
                  </div>
                </Button>
              </Link>
              <Link href='/profile'>
                <Button variant='outline'>
                  <div className='flex items-center space-x-2'>
                    <Image
                      src='/icon/account.png'
                      width={20}
                      height={20}
                      alt='Account Logo'
                    />
                    <span>Профайл</span>
                  </div>
                </Button>
              </Link>
              <Button onClick={logout} variant='outline'>
                <div className='flex items-center space-x-2'>
                  <Image
                    src='/icon/log-out.png'
                    width={20}
                    height={20}
                    alt=''
                  />
                  <span>Гарах</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
