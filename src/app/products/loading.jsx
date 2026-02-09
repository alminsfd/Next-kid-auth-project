import ProductCardSkeleton from '@/components/cards/ProductCardSkeleton';
import React from 'react';

const loading = () => {

     return (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' >
               {
                    [...Array(8)].map((_, index) => (
                         <ProductCardSkeleton key={index}></ProductCardSkeleton>
                    ))
               }

          </div>
     );
};

export default loading;