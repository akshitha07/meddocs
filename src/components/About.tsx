
import { motion } from 'motion/react';

export const About = () => {
  return (
    <section id="about-brand" className="py-2 lg:py-12 bg-white relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#2D68FF 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-white border border-slate-100 rounded-2xl p-8 shadow-[0_4px_25px_rgba(0,0,0,0.02)] overflow-hidden"
          >
            {/* Card Corner Decor */}
            <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-blue-50/60 to-transparent transform rotate-45 translate-x-4 -translate-y-4 origin-bottom-left" />
            </div>
            <div className="relative z-10">
              <div className="text-brand-primary text-sm font-bold uppercase tracking-wider mb-4">WELCOME TO MEDDOCS</div>
              <h2 className="text-4xl font-black font-display text-brand-rich mb-2">ABOUT US</h2>
              <div className="w-20 h-1 bg-brand-primary mb-10" />
              
              <div className="text-slate-700 text-base leading-relaxed">
              <p>
                MedDocs Publishers is a very well-dedicated in publishing various informative medical journals which acts as a powerhouse to bring the physicians and the entire medical fraternity the best research with latest discovered key information in a completely understandable and clinically useful format. This is certainly a career companion for all physicians and medical researchers. The practicing physicians can be well informed about the various new developments in the field which is very necessary to treat patients in the best possible way.
              </p>
            </div>

            <div className="mt-12">
                <button className="bg-[#005691] hover:bg-brand-rich text-white px-10 py-4 font-bold transition-all uppercase tracking-widest text-sm">
                  READ MORE
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                src="/src/assets/welcomeImg.png" 
                alt="MEDDOCS Welcome" 
                className="w-full h-auto"
              />
            </div>

            {/* Decorative Blobs */}
            <div className="absolute top-0 right-0 w-full h-full opacity-30 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-primary/5 rounded-full blur-[120px]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
