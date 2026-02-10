'use client';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';

const SocialButtons = () => {
     const params = useSearchParams()
     const handleSignIn = async () => {
          const restult = await signIn('google', { redirect: false, callbackUrl: params.get('callback') || "/" })
          if (restult.ok) {
               Swal.fire("Login successful!", "You are successfully logged in with Google.", "success")
          }
          else {
               Swal.fire("Login failed!", "Google sign-in was unsuccessful. Please try again.", "error")
          }
     }
     return (
          <div className="flex gap-3 mt-4">
               <button
                    onClick={handleSignIn}
                    className="btn btn-outline btn-error flex-1"
               >
                    <FaGoogle className="text-lg" />
                    Google
               </button>
          </div>
     );
};

export default SocialButtons;