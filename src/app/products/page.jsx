
import Products from '@/components/Home/Products';
import React from 'react';

export const metadata = {
     title: "AllProducts - Herokids",
     description: "Explore our wide range of toys and games for children of all ages. Find the perfect gift for your little hero at Herokids.",
};
const page = () => {
     return (
          <div>
               <Products></Products>
          </div>
     );
};

export default page;