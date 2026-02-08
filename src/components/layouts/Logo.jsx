import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
     return (
          <div className='flex items-center gap-2' >
               <Link href="/">
                    <Image alt='hero-kids-imge' src='/logo.png' width={80} height={80} className='w-12 rounded-full ' />
               </Link>
               <h1 className='text-xl font-bold'>Hero <span className='text-primary'>Kids</span></h1>
          </div>
     );
};

export default Logo;