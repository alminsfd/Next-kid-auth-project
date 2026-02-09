'use client';

import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { FaCartPlus } from 'react-icons/fa';

const CartButton = ({ product }) => {
     const route = useRouter();
     const path = usePathname()
     const Islogin = false; // Replace with actual login state
     const handleAdd2Cart = () => {
          if (!Islogin) {
               alert("Please log in to add items to your cart.");
               return;
          }
          // Implement add to cart functionality here
          route.push(`/login?callback=${path}`);



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