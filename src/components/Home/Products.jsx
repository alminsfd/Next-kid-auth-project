import React from 'react';
// import products from '@/data/toys.json'
import ProductCard from '../cards/Productcard';
import { getProducts } from '@/action/server/product';

const Products = async () => {
     const products = await getProducts()
     return (
          <div>
               <h2 className='text-center text-4xl font-bold mb-10' >Our Products</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map(product => <ProductCard key={product.title} product={product}></ProductCard>)}
               </div>
          </div>
     );
};

export default Products;