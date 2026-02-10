'use client'
import { signOut } from "next-auth/react"
import { useSession } from 'next-auth/react';
import Link from "next/link";
import React from 'react';
const Authbutton = () => {
     const session = useSession();
     return (
          <div>
               {
                    session?.status === "authenticated" ? (
                         <button onClick={() => signOut()} className="btn btn-primary btn-outline">Logout</button>
                    ) : (
                         <Link href="/login" className="btn btn-primary btn-outline">Log in</Link>
                    )
               }
          </div>
     );
};

export default Authbutton;