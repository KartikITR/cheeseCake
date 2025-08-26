// components/CurvedCard.tsx
import Image from "next/image";

export default function CurvedCard() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200">
            <div className="relative">
                {/* Circle with image */}
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[250px] h-[250px] rounded-full border-2 border-transparent overflow-hidden shadow-xl bg-transparent">
                    <Image
                        src="/blucake.png"
                        alt="Blueberry Cheesecake"
                        fill
                        className="object-contain p-2"
                    />
                </div>

                {/* Card with concave top */}
                <div
                    className="w-64 h-96 bg-white shadow-xl relative z-10 rounded-b-2xl flex flex-col justify-end"
                    style={{
                        clipPath:
                            "path('M0,40 Q128,220 256,40 L256,384 Q256,416 224,416 L32,416 Q0,416 0,384 Z')",
                    }}
                >

                    {/* Card content */}
                    <div className="p-4 text-center space-y-2">
                        {/* Title */}
                        <h2 className="text-lg font-semibold text-gray-800">
                            Candy Meadow Cupcake
                        </h2>

                        {/* Rating */}
                        <div className="flex justify-center items-center text-yellow-500 font-medium">
                            ⭐ <span className="ml-1 text-gray-700">4.8</span>
                        </div>

                        {/* Price */}
                        <div className="flex justify-center items-center space-x-2">
                            <span className="text-xl font-bold text-green-600">₱120.00</span>
                            <span className="text-sm text-gray-500 line-through">₱150.00</span>
                        </div>

                        {/* Add to Cart Button */}
                        <button className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold shadow-md transition">
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
