'use client';

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { FaCartPlus, FaEye } from "react-icons/fa";
import { useRouter } from "next/navigation";  // Import useRouter

export type CategoryProps = SliceComponentProps<Content.CategorySlice>;

const Category = ({ slice }: CategoryProps): JSX.Element => {
  const router = useRouter();  // Initialize router

  // Function to handle view button click
  const handleViewClick = (productName: string) => {
    router.push(`/products/${encodeURIComponent(productName)}`);  // Navigate to the product details page
  };

  return (
    <section
      className="py-16 px-4 md:px-8 bg-pink-100"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          {/* Left side: Heading and description */}
          <div className="w-full lg:w-2/5 mb-12 lg:mb-0 pr-0 lg:pr-12">
            <div className="flex items-center mb-4">
              {/* Heading */}
              <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 16C4.79086 16 3 14.2091 3 12C3 9.79086 4.79086 8 7 8C9.20914 8 11 9.79086 11 12C11 14.2091 9.20914 16 7 16Z" fill="#FF6B6B" />
                <path d="M17 8C19.2091 8 21 9.79086 21 12C21 14.2091 19.2091 16 17 16C14.7909 16 13 14.2091 13 12C13 9.79086 14.7909 8 17 8Z" fill="#FF6B6B" />
              </svg>
              <div className="text-2xl text-green-600 font-semibold uppercase tracking-wide">
                <PrismicRichText field={slice.primary.small_heading} />
              </div>
            </div>
            <div className="text-5xl font-bold mb-6 text-gray-800">
              <PrismicRichText field={slice.primary.heading} />
            </div>
            <div className="text-gray-600 leading-relaxed">
              <PrismicRichText field={slice.primary.description} />
            </div>
          </div>

          {/* Right side: Category items */}
          <div className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-8">
            {slice.primary.category.map((item, index) => (
              <div key={index} className="flex flex-col">
                <div className="mb-4">
                  <div className="text-2xl font-semibold text-gray-800">
                    <PrismicRichText field={item.heading} />
                  </div>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-6 transition-transform duration-300 hover:scale-105 flex-grow">
                  <div className="mb-6">
                    <PrismicNextImage field={item.image} className="rounded-lg w-full h-48 object-cover" />
                  </div>
                  <div className="font-semibold text-lg mb-2">
                    {item.name}
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="line-through text-gray-400 mr-2">{item.price}</span>
                      <span className="text-red-600 font-bold">{item.discounted_price}</span>
                    </div>
                    <div className="flex space-x-3">
                      <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors" aria-label="Add to cart">
                        <FaCartPlus className="text-gray-600 text-xl" />
                      </button>
                      <button
                        className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                        aria-label="View details"
                        onClick={() => handleViewClick(item.name ?? '')}
                        > 
                        <FaEye className="text-gray-600 text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
