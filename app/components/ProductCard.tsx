"use client";
import { ShoppingCart, Star } from "lucide-react";

type ProductCardProps = {
  title: string;
  price: string;
  oldPrice?: string;
  rating: number;
  location: string;
};

export default function ProductCard({
  title,
  price,
  oldPrice,
  rating,
  location,
}: ProductCardProps) {
  return (
    <div className="w-72 rounded-2xl shadow-lg bg-white overflow-hidden flex flex-col items-center pb-6 pt-20 text-center">
      {/* Card content (pt-20 creates space for the floating image) */}
      <div className="w-full px-4">
        <h3 className="font-semibold text-gray-800">{title}</h3>

        <div className="mt-2 flex justify-center items-baseline gap-2">
          <span className="text-lg font-bold text-gray-900">{price}</span>
          {oldPrice && (
            <span className="text-sm text-gray-400 line-through">{oldPrice}</span>
          )}
        </div>

        {/* Rating + Location */}
        <div className="mt-2 flex flex-col items-center text-sm text-gray-600">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span className="text-gray-800">{rating}</span>
          </div>
          <p className="text-gray-500">{location}</p>
        </div>

        {/* Add to cart button */}
        <button className="mt-4 w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg shadow-md transition">
          <ShoppingCart size={18} />
          Add To Cart
        </button>
      </div>
    </div>
  );
}
