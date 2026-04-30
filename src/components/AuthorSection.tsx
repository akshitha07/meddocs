
import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

export const AuthorSection = () => {
  return (
    <section id="authors" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1">
          <div className="text-brand-primary text-xs font-black uppercase tracking-[0.3em] mb-4 font-bold">For Researchers</div>
          <h2 className="font-display font-bold text-5xl mb-8 text-brand-rich leading-tight text-brand-primary">Publish with MedDocs.</h2>
          <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-xl font-medium">
            Join thousands of researchers who trust MedDocs for their scientific communication. We provide a transparent and supportive environment for authors.
          </p>
          
          <ul className="space-y-6 mb-12">
            {[
              'Strict peer-review process by subject experts',
              'High visibility with international indexing',
              'Gold Open Access for maximum impact',
              'Dedicated author support team'
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-brand-faint flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-brand-primary" />
                </div>
                <span className="font-semibold text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-brand-rich hover:bg-brand-primary text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-lg font-display uppercase tracking-widest text-xs">
              Submit Manuscript
            </button>
            <button className="bg-white border-2 border-slate-100 hover:border-brand-primary text-brand-primary px-10 py-5 rounded-2xl font-bold transition-all text-xs uppercase tracking-widest">
              Author Guidelines
            </button>
          </div>
        </div>
        
        <div className="flex-1 grid grid-cols-2 gap-6 relative">
          <div className="space-y-6 pt-16">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              src="https://images.unsplash.com/photo-1579152276503-7170966bcc0d?auto=format&fit=crop&q=80&w=600" 
              alt="Scientist" 
              className="rounded-[3rem] h-72 w-full object-cover shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="bg-brand-faint p-8 rounded-[2.5rem] border border-brand-primary/10">
              <h4 className="font-bold text-brand-primary mb-2 font-display">Ethics First</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-semibold">Committed to research integrity and academic transparency.</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-brand-rich p-8 rounded-[2.5rem] text-white">
              <h4 className="font-bold mb-2 font-display text-blue-200">Fast Tracking</h4>
              <p className="text-sm text-blue-100/60 leading-relaxed font-semibold">Average review cycle: 14-21 days from submission to decision.</p>
            </div>
            <motion.img 
              whileHover={{ scale: 1.05 }}
              src="https://images.unsplash.com/photo-1532187878417-a63690f79888?auto=format&fit=crop&q=80&w=600" 
              alt="Laboratory" 
              className="rounded-[3rem] h-96 w-full object-cover shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-primary/20 blur-[60px] rounded-full pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
