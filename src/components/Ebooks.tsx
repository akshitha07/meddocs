import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { EBOOKS } from '../constants';
import './Ebooks.css';

export const Ebooks = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  };

  return (
    <section id="ebooks" className="py-20 bg-[#EFEEEA]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-4xl font-bold">E-BOOKS</h2>
            <div className="w-20 h-1 bg-blue-500 mt-2" />
          </div>

          <div className="flex gap-3">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={scrollRight}
              className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {EBOOKS.map((book, index) => (
            <div
              key={index}
              className="min-w-[220px] h-[320px] flex-shrink-0 rounded-lg overflow-hidden shadow-md hover:scale-105 transition"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
