import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Image from "next/image";


/**
 * Props for `HeroSection`.
 */
export type HeroSectionProps = SliceComponentProps<Content.HeroSectionSlice>;

/**
 * Component for "HeroSection" Slices.
 */
const HeroSection = ({ slice }: HeroSectionProps): JSX.Element => {
  return (
    <section className="relative overflow-hidden py-12 lg:py-20 bg-white">
      {/* Background Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
        {/* Example Background Icons */}
        <Image 
          src="/cacao.svg"
          width={20} 
          height={20}
          alt="Cacao Icon" 
          className="absolute top-10 left-10 w-20 h-20 opacity-40"
        />
        <Image 
          src="/strawberry.svg" 
          width={20} 
          height={20}
          alt="Strawberry Icon" 
          className="absolute bottom-10 right-10 w-20 h-20 opacity-40"
        />
        <Image 
          src="/butter.svg" 
          width={20} 
          height={20}
          alt="Butter Icon" 
          className="absolute top-10 right-32 w-20 h-20 opacity-40"
        />
        <Image 
          src="/chutney.svg" 
          width={20} 
          height={20}
          alt="Chutney Icon" 
          className="absolute bottom-20 left-20 w-20 h-20 opacity-40"
        />
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start relative z-10">
        {/* Left Side: Circular Images */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start">
          {/* Large Circular Image */}
          <div className="relative w-[280px] h-[280px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden shadow-lg">
            <PrismicNextImage field={slice.primary.image} className="object-cover w-full h-full" />
          </div>
          
          {/* Smaller Circular Image (hidden on mobile) */}
          <div className="absolute top-0 left-0 transform -translate-x-1/3 -translate-y-1/3 w-[120px] h-[120px] lg:w-[180px] lg:h-[180px] rounded-full overflow-hidden border-4 border-white shadow-md hidden sm:block">
            <PrismicNextImage field={slice.primary.small_image} className="object-cover w-full h-full" />
          </div>
        </div>
        
        {/* Right Side: Text Content */}
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:ml-6 text-center lg:text-left">
          <div>
            {/* Icon Above Subheading */}
            <div className="flex justify-center lg:justify-start items-center mb-2">
              <Image 
                src="/peanuts.svg" 
                width={20} 
                height={20}
                alt="Cherry Icon" 
                className="w-6 h-6 mr-2"
              />
              <div className="text-4xl font-semibold text-green-400">
                <PrismicRichText field={slice.primary.sub_heading} />
              </div>
            </div>

            {/* Main Heading */}
            <div className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4">
              <PrismicRichText field={slice.primary.heading} />
            </div>

            {/* Title / Paragraph */}
            <div className="text-base text-gray-600 leading-relaxed">
              <PrismicRichText field={slice.primary.title} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
