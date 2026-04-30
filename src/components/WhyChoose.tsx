
import { motion } from 'motion/react';
import { Globe, Zap, Award } from 'lucide-react';

export const WhyChoose = () => {
  const features = [
    { 
      icon: <Globe className="w-10 h-10 text-brand-primary" />, 
      title: 'Citations & Impact', 
      desc: 'Our articles are highly cited and indexed in PubMed, Google Scholar and other major repositories.' 
    },
    { 
      icon: <Zap className="w-10 h-10 text-brand-primary" />, 
      title: 'Speed Matters', 
      desc: 'Rapid peer-review process ensuring that breakthroughs reach the community without delay.' 
    },
    { 
      icon: <Award className="w-10 h-10 text-brand-primary" />, 
      title: 'Ethical Integrity', 
      desc: 'Committed to COPE and the highest standards of transparency in academic publishing.' 
    }
  ];

  return (
    <section id="about" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-40">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-brand-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="text-brand-primary text-xs font-black uppercase tracking-[0.3em] mb-4 font-bold">Core Principles</div>
            <h2 className="font-display font-bold text-5xl lg:text-6xl text-brand-rich leading-tight">
              Empowering Global <span className="text-brand-primary">Medical</span> Communication.
            </h2>
          </div>
          <div className="w-24 h-1 bg-brand-primary rounded-full hidden md:block mb-4" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.06)] transition-all group"
            >
              <div className="mb-8 p-5 bg-brand-faint w-fit rounded-2xl group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display text-brand-rich">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm font-semibold">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
