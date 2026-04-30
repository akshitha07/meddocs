
import { Mail, Phone, MapPin } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-12 bg-white grow">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/3">
            <div className="text-brand-primary text-xs font-black uppercase tracking-[0.3em] mb-4 font-bold">Direct Contact</div>
            <h2 className="font-display font-bold text-3xl lg:text-4xl mb-6 text-brand-rich font-bold">Reach Out.</h2>
            <div className="space-y-4">
              {[
                { icon: <Mail />, label: 'EMAIL', val: 'support@meddocsonline.org' },
                { icon: <Phone />, label: 'Whatsapp Number', val: '+1 (608) 718-6264' }
              ].map((item, i) => (
                <div key={i} className="flex gap-3 p-4 lg:p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 text-brand-primary shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.label}</div>
                    <div className="font-semibold text-brand-rich text-sm">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-2/3 bg-slate-50 p-6 lg:p-12 rounded-2xl border border-slate-100">
            <form className="grid sm:grid-cols-2 gap-4 lg:gap-6">
              <div className="space-y-3">
                <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                <input type="text" className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 outline-none focus:border-brand-primary transition-all font-medium text-brand-rich text-sm" />
              </div>
              <div className="space-y-3">
                <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">Work Email</label>
                <input type="email" className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 outline-none focus:border-brand-primary transition-all font-medium text-brand-rich text-sm" />
              </div>
              <div className="sm:col-span-2 space-y-3">
                <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-1">Inquiry Details</label>
                <textarea rows={3} className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 outline-none focus:border-brand-primary transition-all font-medium resize-none text-brand-rich text-sm"></textarea>
              </div>
              <div className="sm:col-span-2 pt-2">
                <button className="w-full bg-brand-rich hover:bg-brand-primary text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-brand-rich/20 text-sm uppercase tracking-[0.2em] font-display">
                  Send Manuscript Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
