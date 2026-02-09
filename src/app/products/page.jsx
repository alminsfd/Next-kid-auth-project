
import Products from '@/components/Home/Products';
import React from 'react';

export const metadata = {
     title: "All Products – Educational Toys for Kids",
     description:
          "Browse all educational toys and learning boards for kids. Safe, fun, and creativity-boosting toys at Hero Kids.",
     openGraph: {
          title: "All Products | Hero Kids",
          description:
               "Explore our full collection of smart and educational toys for kids.",
          images: [
               {
                    url: "https://i.ibb.co.com/nM8x59SL/Allproducts.png",
                    width: 1200,
                    height: 630,
                    alt: "Hero Kids All Products",
               },
          ],
     },
};

const page = () => {
     return (
          <div>
               <Products></Products>
          </div>
     );
};

export default page;