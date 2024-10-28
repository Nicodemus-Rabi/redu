import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type PopularProductsProps = SliceComponentProps<Content.PopularProductsSlice>;

const PopularProducts = ({ slice }: PopularProductsProps): JSX.Element => {
  const { primary } = slice;
  const { heading, images } = primary || {};

  return (
    <section
      className="py-16 px-4 md:px-8 bg-white"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="flex items-center mb-6">
          <svg
            className="w-8 h-8 mr-3"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 16C4.79086 16 3 14.2091 3 12C3 9.79086 4.79086 8 7 8C9.20914 8 11 9.79086 11 12C11 14.2091 9.20914 16 7 16Z"
              fill="#FF6B6B"
            />
            <path
              d="M17 8C19.2091 8 21 9.79086 21 12C21 14.2091 19.2091 16 17 16C14.7909 16 13 14.2091 13 12C13 9.79086 14.7909 8 17 8Z"
              fill="#FF6B6B"
            />
          </svg>
          {/* <span className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            Our Products
          </span> */}
        </div>

        {/* Heading */}
        {heading && (
          <div className="text-4xl font-extrabold mb-10 text-gray-900">
            <PrismicRichText field={heading} />
          </div>
        )}

        {/* Images Grid */}
        {images && images.length > 0 && (
          <div className="grid grid-cols-12 gap-6">
            {/* Large Image on the left */}
            {images[0]?.icons && (
              <div className="col-span-8 row-span-2">
                <PrismicNextImage
                  field={images[0].icons}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                  imgixParams={{ bg: "rgb:E0EEE0" }}
                />
              </div>
            )}
            {/* Smaller Images on the right */}
            {images[1]?.icons && (
              <div className="col-span-4 row-span-1">
                <PrismicNextImage
                  field={images[1].icons}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                  imgixParams={{ bg: "rgb:E0EEE0" }}
                />
              </div>
            )}
            {images[2]?.icons && (
              <div className="col-span-4 row-span-1">
                <PrismicNextImage
                  field={images[2].icons}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                  imgixParams={{ bg: "rgb:E0EEE0" }}
                />
              </div>
            )}
            {images[3]?.icons && (
              <div className="col-span-4 row-span-1">
                <PrismicNextImage
                  field={images[3].icons}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                  imgixParams={{ bg: "rgb:E0EEE0" }}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularProducts;
