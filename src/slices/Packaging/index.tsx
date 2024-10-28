import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Packaging`.
 */
export type PackagingProps = SliceComponentProps<Content.PackagingSlice>;

/**
 * Component for "Packaging" Slices.
 */
const Packaging = ({ slice }: PackagingProps): JSX.Element => {
  return (
    <section className="py-12 sm:py-16 bg-pink-50">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {slice.primary.pack.map((item, index) => (
          <div
            key={index}
            className="relative group bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            style={{ borderRadius: "30px" }}
          >
            {/* Package Image */}
            <div className="overflow-hidden">
              <PrismicNextImage
                field={item.image}
                className="w-full h-64 md:h-72 lg:h-80 object-cover transition-transform duration-300"
              />
            </div>

            {/* Heading */}
            <div className="p-6 md:p-8 text-center">
              <div className="text-gray-700 font-semibold text-lg md:text-xl">
                <PrismicRichText field={item.heading} />
              </div>
            </div>

            {/* Description (hidden initially, shown on hover) */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-white rounded-b-3xl transition-all duration-500 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
              <div className="text-center text-gray-500 text-sm md:text-base mt-2">
                <PrismicRichText field={item.description} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packaging;
