
export const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-3 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold font-display mb-4 uppercase tracking-tight">MEDDOCS PUBLISHERS</h2>
          <p className="text-blue-50/90 text-sm leading-relaxed max-w-2xl font-medium">
            The journals, e-books and conferences are being published and organized in order to spread the information on the latest technological and scientific researches among the core group with the aim of disseminating information for the betterment of mankind.
          </p>
        </div>
        <button className="bg-white text-brand-primary hover:bg-blue-50 px-10 py-5 rounded-xl font-bold transition-all font-display uppercase tracking-[0.2em] text-xs shadow-2xl shadow-black/20 group">
          More Info
        </button>
      </div>
    </section>
  );
};
