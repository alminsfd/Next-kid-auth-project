'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import SocialButtons from './SocialButtons';
import { signIn } from "next-auth/react"
import Swal from 'sweetalert2';
import { useRouter, useSearchParams } from 'next/navigation';


const LoginForm = () => {
     const router = useRouter()
     const params = useSearchParams()
     const [form, setForm] = useState({
          email: "",
          password: "",
     })
     const onchange = (e) => {
          setForm({ ...form, [e.target.name]: e.target.value })

     }
     const handleSubmit = async (e) => {
          e.preventDefault();
          const result = await signIn('credentials',
               {
                    email: form.email,
                    password: form.password,
                    redirect: false,
               }
          )

          if (!result.ok) {
               Swal.fire("Login failed!", "Invalid email or password.", "error")
          } else {
               Swal.fire("Password matched!", "You are successfully logged in.", "success")
               router.push(params.get("callback") || "/")
          }
     }
     return (
          <div className="min-h-screen flex items-center justify-center bg-base-200">
               <div className="card w-full max-w-sm shadow-xl bg-base-100">
                    <div className="card-body">
                         <h2 className="text-2xl font-bold text-center">Login</h2>

                         <form onSubmit={handleSubmit} className="space-y-3">
                              <input
                                   type="email"
                                   name="email"
                                   placeholder="Email"
                                   onChange={onchange}
                                   className="input input-bordered w-full"
                                   required
                              />

                              <input
                                   type="password"
                                   name="password"
                                   onChange={onchange}
                                   placeholder="Password"
                                   className="input input-bordered w-full"
                                   required
                              />

                              <button type="submit" className="btn btn-primary w-full">
                                   Login
                              </button>
                         </form>

                         <SocialButtons />

                         <p className="text-center text-sm mt-4">
                              Don’t have an account?{" "}
                              <Link
                                   href={`/register?callback=${params.get("callback") || "/"}`}
                                   className="link link-primary"
                              >
                                   Register
                              </Link>
                         </p>
                    </div>
               </div>
          </div>
     );
};


export default LoginForm;