import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { EBOOKS } from '../constants';

export const EbooksComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % EBOOKS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + EBOOKS.length) % EBOOKS.length);
  };

  return (
    <section id="ebooks" className="py-16 bg-[#EFEEEA] overflow-hidden border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold">E-BOOKS</h2>
        </div>

        {/* SLIDER */}
        <div className="relative">
          
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slider Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {EBOOKS.slice(currentIndex, currentIndex + 4).map((book, index) => (
                <div
                  key={index}
                  className="min-w-full md:min-w-[50%] lg:min-w-[33.33%] px-4"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-[300px] object-cover"
                    />
                    <div className="p-4 text-center">
                      <h3 className="font-semibold text-lg">
                        {book.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: Math.ceil(EBOOKS.length / 4) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / 4) === index ? 'bg-blue-600' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
