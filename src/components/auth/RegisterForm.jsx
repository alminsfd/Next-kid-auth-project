'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import SocialButtons from './SocialButtons';
import { useRouter, useSearchParams } from 'next/navigation';
import { postUser } from '@/action/server/auth';
import Swal from 'sweetalert2';


const RegisterForm = () => {
     const params = useSearchParams()
     const router = useRouter();
     const [form, setForm] = useState({
          name: "",
          email: "",
          password: "",
     });

     const handleChange = (e) => {
          setForm({ ...form, [e.target.name]: e.target.value });
     };

     const handleSubmit = async (e) => {
          e.preventDefault();
          const result = await postUser(form);
          if (result && result.insertedId) {
               Swal.fire("Registration successful!", "Your account has been created successfully.", "success")
               router.push(params.get("callback") || "/login")
          } else {
               Swal.fire("Registration failed!", "User may already exist or an error occurred.", "error")
          }

     }
     return (
          <div className="min-h-screen flex items-center justify-center bg-base-200">
               <div className="card w-full max-w-sm shadow-xl bg-base-100">
                    <div className="card-body">
                         <h2 className="text-2xl font-bold text-center">Create Account</h2>

                         <form
                              onSubmit={handleSubmit}
                              className="space-y-3">
                              <input
                                   type="text"
                                   name="name"
                                   placeholder="Full Name"
                                   className="input input-bordered w-full"
                                   onChange={handleChange}
                                   required
                              />

                              <input
                                   type="email"
                                   name="email"
                                   placeholder="Email"
                                   className="input input-bordered w-full"
                                   onChange={handleChange}
                                   required
                              />

                              <input
                                   type="password"
                                   name="password"
                                   placeholder="Password"
                                   className="input input-bordered w-full"
                                   onChange={handleChange}
                                   required
                              />

                              <button type="submit" className="btn btn-primary w-full">
                                   Register
                              </button>
                         </form>

                         < SocialButtons />

                         <p className="text-center text-sm mt-4">
                              Already have an account?{" "}
                              <Link href="/login" className="link link-primary">
                                   Login
                              </Link>
                         </p>
                    </div>
               </div>
          </div>
     );
}



export default RegisterForm;