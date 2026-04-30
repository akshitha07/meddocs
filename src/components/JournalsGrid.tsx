
import { Search, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Journal } from '../types';

interface JournalsGridProps {
  loading: boolean;
  filteredJournals: Journal[];
}

const SkeletonCard = () => (
  <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 shadow-sm">
    <div className="skeleton h-4 w-24 mb-4" />
    <div className="skeleton h-6 w-3/4 mb-3" />
    <div className="skeleton h-4 w-full mb-2" />
    <div className="skeleton h-4 w-5/6 mb-4" />
    <div className="skeleton h-8 w-32" />
  </div>
);

export const JournalsGrid = ({ loading, filteredJournals }: JournalsGridProps) => {
  return (
    <section id="journals" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="text-brand-primary text-xs font-black uppercase tracking-[0.3em] mb-4 font-bold">Scientific Archive</div>
            <h2 className="font-display font-bold text-5xl text-brand-rich leading-tight">Explore Our <span className="text-brand-primary">Journals</span>.</h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-slate-400">
            <span className="w-12 h-px bg-slate-200" />
            {filteredJournals.length} Publications Foundation
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          ) : (
            <AnimatePresence mode="popLayout">
              {filteredJournals.map((journal) => (
                <Link
                  key={journal.id}
                  to={`/journal/${journal.id}`}
                  className="block"
                >
                  <motion.div 
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ y: -8 }}
                    className="group flex flex-col p-10 bg-white border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(45,104,255,0.12)] transition-all duration-500 relative overflow-hidden ring-1 ring-slate-100 hover:ring-brand-primary/20 cursor-pointer"
                  >
                  {/* Subtle Corner Accent from Screenshot */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-faint translate-x-16 -translate-y-16 rotate-45 group-hover:bg-brand-primary/5 transition-colors duration-500" />
                  
                  <div className="text-[11px] font-black text-brand-primary uppercase tracking-[0.3em] mb-6 relative z-10 flex items-center gap-3">
                    <span className="w-3 h-3 bg-brand-primary rounded-full shadow-[0_0_10px_rgba(45,104,255,0.3)]" />
                    {journal.category}
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold mb-6 font-display text-brand-primary group-hover:text-brand-secondary transition-colors leading-tight relative z-10">
                    {journal.title}
                  </h3>

                  <p className="text-slate-500 text-base mb-12 leading-relaxed font-medium relative z-10">
                    {journal.description}
                  </p>

                  <div className="mt-auto pt-10 border-t border-slate-50 flex items-center justify-between relative z-10">
                    <div className="bg-slate-50 px-4 py-3 rounded-lg">
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">ISSN:</div>
                      <div className="text-[11px] font-bold text-slate-600 tracking-wider">
                        {journal.issn}
                      </div>
                    </div>
                    <button className="flex items-center gap-3 text-[11px] font-black text-brand-rich hover:text-brand-primary group/btn transition-all uppercase tracking-widest">
                      Browse Issues
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                  </div>
                  </motion.div>
                </Link>
              ))}
            </AnimatePresence>
          )}
        </div>
        
        {!loading && filteredJournals.length === 0 && (
          <div className="py-24 text-center bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 shadow-sm border border-slate-100">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-brand-rich">No journals found</h3>
            <p className="text-slate-400 font-medium">Try adjusting your research filters or search terms.</p>
          </div>
        )}
      </div>
    </section>
  );
};
