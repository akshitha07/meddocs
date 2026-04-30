
import { Globe, Mail, Award } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-24 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <img 
                src="/assets/logo.png" 
                alt="MEDDOCS Logo" 
                className="h-16 w-auto bg-white p-3 rounded-lg"
              />
            </div>
            <p className="text-slate-400 text-sm max-w-sm mb-10 leading-relaxed font-medium">
              Registered with DOI & CrossRef. Advancing scientific innovation through open access publishing and global peer-reviewed collaboration.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-brand-primary transition-colors border border-white/10">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-brand-primary transition-colors border border-white/10">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 mb-8 font-display">Navigation</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-semibold">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#ebooks" className="hover:text-white transition-colors">E-Books</a></li>
              <li><a href="#about-brand" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 mb-8 font-display">Services</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-semibold">
              <li><a href="#" className="hover:text-white transition-colors">Submit Manuscript</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 mb-8 font-display">Contact Us</h4>
            <div className="space-y-2 text-slate-400 text-sm">
              <p>MedDocs Publishers LLC</p>
              <p>Suite 200-A, 401 Ryland St, Reno, NV 89502</p>
              <p>United States</p>
              <p className="text-brand-primary">support@meddocsonline.org</p>
              <p className="text-brand-primary">www.meddocsonline.org</p>
            </div>
          </div>
          
                  </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/5 gap-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          <p>Copyright © 2018-2019 Meddocs All Rights Reserved.</p>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
              <span>Systems Operational</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
