import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {

    const dispatch = useDispatch();

    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );

    const [hasPrime] = useState(Math.random() < 0.5);

    const addItemToBasket = () => {
        const product = {
            id, 
            title,
            price,
            rating, 
            description, 
            category, 
            image,
            hasPrime,
        };

        dispatch(addToBasket(product));
    };

    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10">
            <p className="absolute top-2 right-2 tex-xs italic text-gray-400">{category}</p>

            <Image className="cursor-pointer transition duration-500 ease-in-out  hover:focus-within: transform hover:-translate-y-1 hover:scale-600 ..." src={image} height={200} width={200} objectFit="contain" />

            <h4 className="my-3">{title}</h4>

            <div className="flex">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <StarIcon className="h-5 text-yellow-500" />
                    ))}
            </div>

            <p className="text-xs my-2 line-clamp-2" >{description}</p>

            <div className="mb-5">
                <Currency quantity={73*price} currency="INR" />
            </div>

            {hasPrime && (
                <div className="flex items-center space-x-2 -mt-5">
                    <img className="w-12" src="https://links.papareact.com/fdw" alt="Prime" />
                    <p className="text-xs text-gray-500">Free next day Delivery</p>
                </div>
            )}

            <button onClick={addItemToBasket} 
            className="mt-auto button transition duration-500 ease-in-out bg-yellow-300 hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110 ...">Add to Basket</button>
        </div>
    );
}

export default Product;
