"use client"

import { Content } from "@prismicio/client"
import { PrismicNextImage } from "@prismicio/next"
import { PrismicRichText, SliceComponentProps } from "@prismicio/react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export type OurValueProps = SliceComponentProps<Content.OurValueSlice>

export default function OurValue({ slice }: OurValueProps): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovering) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slice.primary.images.length)
      }
    }, 5000)

    return () => clearInterval(timer)
  }, [slice.primary.images.length, isHovering])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slice.primary.images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slice.primary.images.length) % slice.primary.images.length)
  }

  return (
    <section
      className="relative w-full min-h-screen py-20 overflow-hidden bg-gradient-to-br from-emerald-100 to-teal-100"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl font-bold text-emerald-800 mb-12 text-center"
        >
          Our Values
        </motion.div>

        <div className="relative w-full aspect-[16/9] max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-opacity-10 bg-emerald-300 pattern-dots pattern-emerald-500 pattern-bg-white pattern-size-2 pattern-opacity-10"></div>

          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <PrismicNextImage
                field={slice.primary.images[currentIndex].image}
                fill
                className="object-cover"
                priority={currentIndex === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute bottom-8 left-8 right-8 bg-white bg-opacity-90 p-6 rounded-2xl shadow-lg z-20"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="text-sm text-emerald-600 mb-2 font-semibold">
              <PrismicRichText field={slice.primary.heading} />
            </div>

            <div className="text-2xl md:text-3xl font-bold mb-4 text-emerald-800">
              <PrismicRichText field={slice.primary.title} />
            </div>

            <div className="text-sm md:text-base text-gray-700">
              <PrismicRichText field={slice.primary.description} />
            </div>
          </motion.div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-emerald-800" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-emerald-800" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {slice.primary.images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex ? "bg-emerald-600 scale-125" : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}