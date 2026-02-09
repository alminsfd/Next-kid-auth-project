
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const ProductCard = ({ product }) => {
     const {
          _id,
          title,
          image,
          price,
          discount,
          ratings,
          reviews,
          sold,
     } = product;

     const finalPrice = discount
          ? price - (price * discount) / 100
          : price;

     return (
          <div className="card bg-base-100 shadow-md hover:shadow-xl transition rounded-xl">
               {/* IMAGE */}
               <figure className="relative h-48">
                    <Image
                         width={100}
                         height={150}
                         src={image}
                         alt={title}
                         className="object-cover rounded-t-xl"
                    />
                    {discount > 0 && (
                         <span className="badge badge-error text-white absolute top-2 left-2">
                              {discount}% OFF
                         </span>
                    )}
               </figure>

               {/* CARD BODY */}
               <div className="card-body p-4 space-y-2">
                    {/* TITLE */}
                    <h2 className="font-semibold text-sm line-clamp-2">
                         {title}
                    </h2>

                    {/* RATING + REVIEW */}
                    <div className="flex items-center gap-2 text-xs">
                         <FaStar className="text-yellow-400" />
                         <span>{ratings}</span>
                         <span className="text-gray-400">
                              ({reviews} reviews)
                         </span>
                    </div>

                    {/* SOLD */}
                    <p className="text-xs text-gray-500">
                         Sold: {sold}
                    </p>

                    {/* PRICE */}
                    <div className="flex items-center gap-2">
                         <span className="text-primary font-bold text-lg">
                              ৳{finalPrice}
                         </span>
                         {discount > 0 && (
                              <span className="line-through text-sm text-gray-400">
                                   ৳{price}
                              </span>
                         )}
                    </div>

                    {/* ADD TO CART BUTTON */}
                    <button className="btn btn-sm btn-primary w-full mt-2">
                         <FaShoppingCart />
                         Add to Cart
                    </button>
                    <Link
                         href={`/products/${_id.toString()}`}
                         className="btn btn-sm btn-primary btn-outline w-full mt-2">
                         <FaEye />
                         View Details
                    </Link>
               </div>
          </div>
     );
};

export default ProductCard;
