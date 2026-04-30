
export const StatsRow = () => {
  const stats = [
    { label: 'Active Journals', value: '120+' },
    { label: 'Published Articles', value: '15.4k' },
    { label: 'Contributing Authors', value: '8.2k' },
    { label: 'Global Readers', value: '2.5m+' }
  ];

  return (
    <div className="bg-white py-12 relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center md:text-left border-l-2 border-brand-primary/20 pl-6 py-2">
            <div className="text-3xl font-black font-display text-brand-rich mb-1">{stat.value}</div>
            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
