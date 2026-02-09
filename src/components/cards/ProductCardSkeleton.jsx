const ProductCardSkeleton = () => {
     return (
          <div className="card bg-base-100 shadow-md rounded-xl">
               {/* IMAGE */}
               <div className="skeleton h-48 w-full rounded-t-xl"></div>

               {/* BODY */}
               <div className="card-body p-4 space-y-2">
                    {/* TITLE */}
                    <div className="skeleton h-4 w-4/5"></div>
                    <div className="skeleton h-4 w-3/5"></div>

                    {/* RATING */}
                    <div className="flex gap-2 items-center">
                         <div className="skeleton h-3 w-8"></div>
                         <div className="skeleton h-3 w-16"></div>
                    </div>

                    {/* SOLD */}
                    <div className="skeleton h-3 w-20"></div>

                    {/* PRICE */}
                    <div className="flex gap-2 items-center">
                         <div className="skeleton h-5 w-20"></div>
                         <div className="skeleton h-4 w-12"></div>
                    </div>

                    {/* ADD TO CART BUTTON */}
                    <div className="skeleton h-9 w-full rounded-md mt-2"></div>
               </div>
          </div>
     );
};

export default ProductCardSkeleton;
