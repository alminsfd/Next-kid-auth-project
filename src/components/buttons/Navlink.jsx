'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
const Navlink = ({ href, children }) => {
     const path = usePathname()
     const isActive =
          href === '/'
               ? path === '/'
               : path.startsWith(href)
     return (
          <div>
               <Link href={href} className={`${isActive && 'text-primary'}`} >
                    {children}
               </Link>
          </div>
     );
};

export default Navlink;