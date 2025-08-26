"use client";
import ProductCard from "./ProductCard";
import Image from "next/image";

type ProductCardWrapperProps = {
  image: string;
  cardProps: any; // refine typing later
};

export default function ProductCardWrapper({ image, cardProps }: ProductCardWrapperProps) {
  return (
    <div className="relative flex justify-center">
      {/* Floating circular image */}
      <div className="absolute -top-55 z-10 w-75 h-75 rounded-full overflow-hidden border-4 border-white shadow-md bg-white">
        <Image
          src={image}
          alt={cardProps.title}
          width={128}
          height={128}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Card below */}
      <ProductCard {...cardProps} />
    </div>
  );
}
