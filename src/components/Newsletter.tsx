
export const Newsletter = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-brand-primary opacity-20 rounded-full blur-[140px]" />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="font-display font-bold text-5xl lg:text-7xl mb-6 leading-tight">Stay ahead in Medicine</h2>
        <p className="text-slate-400 mb-10 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
          Get the latest peer-reviewed research and medical breakthroughs delivered weekly.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="professional@email.com" 
            className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:bg-white/10 transition-all font-medium text-white placeholder:text-white/40"
            required
          />
          <button className="bg-brand-primary text-white hover:bg-brand-secondary px-12 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-brand-primary/20 whitespace-nowrap font-display uppercase tracking-widest text-sm">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};
