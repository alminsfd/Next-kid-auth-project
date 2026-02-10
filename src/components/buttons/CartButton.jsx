'use client';

import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { FaCartPlus } from 'react-icons/fa';
import Swal from 'sweetalert2';

const CartButton = ({ product }) => {
     const route = useRouter();
     const session = useSession()
     const path = usePathname()
     const Islogin = session.status === "authenticated"; // Replace with actual login state
     const handleAdd2Cart = () => {
          if (!Islogin) {
               Swal.fire("Login required!", "Please log in to add items to your cart.", "warning")
               route.push(`/login?callback=${path}`);
          }
     }
     return (
          <div>
               <button
                    // disabled={session.status == "loading" || isLoading}
                    onClick={handleAdd2Cart}
                    className="btn btn-primary w-full flex gap-2"
               >
                    <FaCartPlus />
                    Add to Cart
               </button>
          </div>
     );
};

export default CartButton;