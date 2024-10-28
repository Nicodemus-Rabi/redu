'use client';

import { useState } from "react";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { ShoppingCart, Eye, Truck, Package, RotateCcw, Smile, ChevronLeft, ChevronRight } from "lucide-react";

export type ProductsProps = SliceComponentProps<Content.ProductsSlice>;

const Products = ({ slice }: ProductsProps): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const totalPages = Math.ceil(slice.primary.products.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = slice.primary.products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section
      className="py-16 px-4 bg-gradient-to-b from-amber-50 to-white"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="relative w-full h-[50vh] mb-16 rounded-xl overflow-hidden shadow-2xl">
          <PrismicNextImage
            field={slice.primary.image}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-5xl md:text-6xl font-bold text-white text-center px-4">
              <PrismicRichText field={slice.primary.heading} />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {currentProducts.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <div className="relative">
                <PrismicNextImage
                  field={item.image}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4 flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-2 text-gray-800 text-center">{item.name}</h3>
                <p className="text-amber-600 font-bold mb-4">{item.price ? `$${item.price}` : "N/A"}</p>
                <div className="flex justify-center space-x-4">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-amber-100 transition-all">
                    <ShoppingCart className="w-5 h-5 text-amber-600" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-amber-100 transition-all">
                    <Eye className="w-5 h-5 text-amber-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-amber-500 text-white rounded-md disabled:bg-gray-300 flex items-center space-x-2"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Previous</span>
          </button>
          <span className="text-gray-500">
            {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-amber-500 text-white rounded-md disabled:bg-gray-300 flex items-center space-x-2"
          >
            <span>Next</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-4">
            <Truck className="w-10 h-10 text-amber-600" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Free Delivery</h4>
              <p className="text-gray-500">On all orders above $50</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-4">
            <Package className="w-10 h-10 text-amber-600" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Quality Products</h4>
              <p className="text-gray-500">Carefully sourced materials</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-4">
            <RotateCcw className="w-10 h-10 text-amber-600" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Easy Returns</h4>
              <p className="text-gray-500">Hassle-free returns within 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
