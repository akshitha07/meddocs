
import { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export const Navbar = ({ searchQuery, setSearchQuery }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gradient-to-r from-white via-blue-50 to-white shadow-sm py-3' 
        : 'bg-gradient-to-r from-white via-blue-50 to-white py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/src/assets/logo.png" 
            alt="MEDDOCS Logo" 
            className={`h-11 w-auto transition-all`}
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="relative group">
            <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors text-slate-400`} />
            <input 
              type="text" 
              placeholder="Search journals..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`pl-10 pr-4 py-2 border border-transparent focus:border-brand-primary rounded-full text-sm outline-none w-64 transition-all bg-slate-100 text-slate-800 placeholder:text-slate-400`}
            />
          </div>
          
          <div className={`flex items-center gap-6 font-medium text-sm text-slate-700`}>
            <a href="#home" className="hover:text-brand-primary transition-colors font-bold">Home</a>
            {/* <a href="#journals" className="hover:text-brand-primary transition-colors font-bold">Journals</a> */}
            <a href="#ebooks" className="hover:text-brand-primary transition-colors font-bold">E-Books</a>
            <a href="#about-brand" className="hover:text-brand-primary transition-colors font-bold">About</a>
            {/* <a href="#authors" className="hover:text-brand-primary transition-colors font-bold">Authors</a> */}
            <a href="#contact" className="hover:text-brand-primary transition-colors font-bold">Contact</a>
          </div>


        </div>

        {/* Mobile Controls */}
        <div className="lg:hidden flex items-center gap-3">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-full transition-colors hover:bg-slate-100 text-slate-700`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gradient-to-r from-white via-blue-50 to-white border-b border-slate-200 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              <input 
                type="text" 
                placeholder="Search journals..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-4 py-3 bg-slate-100 text-slate-800 placeholder:text-slate-400 rounded-xl outline-none border border-slate-200"
              />
              <div className="flex flex-col gap-4 font-medium text-lg pt-2 text-slate-700">
                <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
                <a href="#ebooks" onClick={() => setMobileMenuOpen(false)}>E-Books</a>
                <a href="#about-brand" onClick={() => setMobileMenuOpen(false)}>About</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              </div>
              <button className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold mt-2 hover:bg-brand-secondary transition-colors">
                Submit Manuscript
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
