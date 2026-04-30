import { motion } from 'motion/react';

export const ConferenceSection = () => {
  return (
    <section id="conferences" className="py-12 lg:py-16 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.02]" 
           style={{ backgroundImage: 'radial-gradient(#2D68FF 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                src="/assets/image.png" 
                alt="MEDDOCS Conference" 
                className="w-full h-auto rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-full h-full opacity-20 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-primary/5 rounded-full blur-[120px]" />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative bg-white border border-slate-100 rounded-2xl p-8 shadow-[0_4px_25px_rgba(0,0,0,0.02)] overflow-hidden"
          >
            {/* Card Corner Decor */}
            <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden z-20">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-slate-50 to-slate-100 shadow-sm transform rotate-45 translate-x-8 -translate-y-8 origin-bottom-left border border-slate-300" />
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-100/30 to-transparent transform rotate-45 translate-x-8 -translate-y-8 origin-bottom-left" />
              <div className="absolute top-2 right-2 w-12 h-12 bg-gradient-to-br from-transparent to-slate-200/40 transform rotate-45 translate-x-6 -translate-y-6 origin-bottom-left" />
            </div>

            <div className="relative z-10">
              <div className="text-brand-primary text-sm font-bold uppercase tracking-wider mb-4">MEDDOCS</div>
              <h2 className="text-4xl font-black font-display text-brand-rich mb-2">CONFERENCES</h2>
              <div className="w-20 h-1 bg-brand-primary mb-10" />
              
              <div className="text-slate-700 text-base leading-relaxed space-y-6">
                <p>
                  We have a wing which is dedicated to organize international conferences in various parts of the world. It provides a great platform for face to face discussions on various latest advancements. The organizing committee leads the conference in the most fruitful manner. Proper scientific agenda is being fixed for each conference while organizing.
                </p>
                <p>
                  These conferences are being organized with the necessary cooperation of the learned societies, the industry leading companies and various scholarly associations which also provides an active forum to the various scientific communities in order to share the newly discovered ideas and knowledge that ultimately works for the betterment of the society and humanity as a whole.
                </p>
              </div>

              <div className="mt-12">
                <button className="bg-[#005691] hover:bg-brand-rich text-white px-10 py-4 font-bold transition-all uppercase tracking-widest text-sm">
                  READ MORE
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
