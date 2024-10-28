'use client';

import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { motion } from "framer-motion";

/**
 * Props for Hero.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(135deg, #F7BAC8, #E0D3EA)",
            "linear-gradient(135deg, #E0D3EA, #B8E0D2)",
            "linear-gradient(135deg, #B8E0D2, #D6E5FA)",
            "linear-gradient(135deg, #D6E5FA, #F7BAC8)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.div 
              className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4"
              style={{ color: "#4A4A4A" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <PrismicRichText field={slice.primary.heading} />
            </motion.div>
            <motion.div 
              className="text-xl mb-6"
              style={{ color: "#4A4A4A" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <PrismicRichText field={slice.primary.title} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <PrismicNextLink field={slice.primary.button_link}>
                <motion.button
                  className="px-6 py-3 bg-[#F7BAC8] text-white font-semibold rounded-full hover:bg-opacity-90 transition duration-300 shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {slice.primary.button_label}
                </motion.button>
              </PrismicNextLink>
            </motion.div>
          </div>
          <div className="md:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <PrismicNextImage
                field={slice.primary.image}
                className="rounded-lg shadow-2xl"
                imgixParams={{ w: 600, h: 400, fit: "crop", q: 100 }}
              />
            </motion.div>
            <motion.div 
              className="absolute -top-4 -left-4 bg-[#B8E0D2] rounded-full p-3 shadow-lg"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        className="absolute top-10 right-10"
        animate={{
          y: [0, 10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        {/* <svg width="50" height="50" viewBox="0 0 24 24" fill="#E0D3EA">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm4 0c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm-4 6c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm4 0c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1z"/>
        </svg> */}
      </motion.div>
      <motion.div 
        className="absolute bottom-0 left-0 right-0"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="#FCD5E0"
            animate={{
              d: [
                "M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z",
                "M0 0L60 5C120 10 240 20 360 23.3C480 26.5 600 23.5 720 21.7C840 20 960 20 1080 23.3C1200 26.5 1320 33.5 1380 36.7L1440 40V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </svg>
      </motion.div>
      <motion.div 
        className="absolute bottom-0 left-0 right-0"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="#FCD5E0"
            animate={{
              d: [
                "M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z",
                "M0 0L60 5C120 10 240 20 360 23.3C480 26.5 600 23.5 720 21.7C840 20 960 20 1080 23.3C1200 26.5 1320 33.5 1380 36.7L1440 40V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
