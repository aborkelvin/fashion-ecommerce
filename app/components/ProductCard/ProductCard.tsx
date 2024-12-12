"use client";

import { addToCart } from "@/app/store/slices/cartSlice";
import { useId } from "react";
import { useDispatch } from "react-redux";

export interface ProductCardProps {
    id?: number;
    image: string;
    title: string;
    price: number;
    category?: string;
    description?: string;
    rating: {
        rate: number;
        count: number;
    }
}


const ProductCard = ({ image, title, price, rating }: ProductCardProps) => {
    
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart());
    }

    return (
        <div className="hover:shadow-sm cursor-pointer transition duration-300 min-w-[231px] lg:min-w-[261px] group">
            <div className="relative w-full h-[308px] lg:h-[349px] bg-primary-grey flex items-center justify-center">
                <div className="absolute top-4 left-4">
                    <div className="bg-white rounded py-1 px-3.5 font-bold" >
                        <span>HOT</span>
                    </div>
                    <div className={`${price > 60 ? "" : "hidden"} mt-1 bg-primary-green text-white rounded py-1 px-3.5 font-bold`} >
                        <span>-50%</span>
                    </div>
                </div>
                <img
                    src={image}
                    alt={title}
                    className="w-[50%] h-[50%] object-contain"
                />
                <button className="bg-black-100 text-[#FEFEFE] rounded-lg font-medium py-3 absolute bottom-3.5 lg:bottom-4 inset-x-3.5 lg:inset-x-4
                    lg:hidden lg:group-hover:block transition duration-300
                    "
                    onClick={handleAddToCart}
                >
                    Add to cart
                </button>
            </div>
            <div className="mt-4">                                
                <div className="flex items-center mb-1">
                    {[...Array(5)].map((index) => (
                        <svg
                            key={useId()}
                            className={`h-4 w-4 ${
                                index < rating.rate ? "text-black-300" : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 .587l3.668 7.431 8.332 1.21-6.045 5.884 1.425 8.302L12 18.896l-7.38 3.865 1.425-8.302L0 9.228l8.332-1.21z" />
                        </svg>
                    ))}
                </div>
                <p className="font-semibold line-clamp-1 mb-1 text-black-100">{title}</p>
                <div className="flex gap-3 text-sm font-semibold">
                    <p className=" text-black-200">${price}</p>
                    {
                        price > 60 && (
                            <p className=" text-secondary-grey line-through">${price * 2}</p>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
