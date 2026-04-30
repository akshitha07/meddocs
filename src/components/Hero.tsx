
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HERO_SLIDES, FEATURED_ARTICLES } from '../constants';

export const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 py-4 lg:py-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/20 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-6 lg:gap-12 items-center relative z-10">
        {/* Left: Sliding Cards */}
        <div className="lg:col-span-5">
          <div className="relative h-[280px] lg:h-[350px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <img 
                  src={HERO_SLIDES[activeSlide].image} 
                  alt={HERO_SLIDES[activeSlide].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
              </motion.div>
            </AnimatePresence>

            {/* Dots Container */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
              {HERO_SLIDES.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveSlide(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${activeSlide === i ? 'bg-white w-10' : 'bg-white/40 w-2 hover:bg-white/60'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right: Modern Articles List */}
        <div className="lg:col-span-7 py-2 pt-20">
          <div className="space-y-4">
            <header className="mb-6">
              <h1 className="text-white text-4xl font-display font-black uppercase tracking-widest drop-shadow-2xl" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9), 0 0 30px rgba(255,255,255,0.8)' }}> Articles</h1>
            </header>
            {FEATURED_ARTICLES.map((article, i) => (
              <Link 
                key={i} 
                to={`/journal/${article.issn}`}
                className="block group cursor-pointer"
              >
                <div className="pb-4 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg transition-all duration-300 group-hover:bg-white/15 group-hover:shadow-xl group-hover:border-white/30">
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-blue-200 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-blue-100/70 text-sm font-semibold mb-3 italic">
                    By {article.author}
                  </p>
                  <div className="bg-blue-900/50 px-3 py-1.5 rounded-md inline-block group-hover:bg-blue-800/50 transition-colors backdrop-blur-sm">
                    <span className="text-xs text-blue-100 uppercase tracking-wide font-semibold">
                      {article.journal} (ISSN: {article.issn})
                    </span>
                  </div>
                </div>
                {i < FEATURED_ARTICLES.length - 1 && (
                  <div className="w-full h-px bg-white/20" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
