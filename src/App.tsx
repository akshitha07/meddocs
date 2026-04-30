/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { StatsRow } from './components/StatsRow';
import { FeatureCategories } from './components/FeatureCategories';
import { Banner } from './components/Banner';
import { WhyChoose } from './components/WhyChoose';
import { JournalsGrid } from './components/JournalsGrid';
import { Ebooks } from './components/Ebooks';
import { AuthorSection } from './components/AuthorSection';
import { Newsletter } from './components/Newsletter';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { JOURNALS } from './constants';
// import { CategoryPage } from './pages/CategoryPage';
import { JournalPage } from './pages/JournalPage';
import { ConferenceSection } from './components/ConferenceSection';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Force light mode
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    
    // Simulate initial loading
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredJournals = useMemo(() => {
    return JOURNALS.filter(j => 
      j.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      j.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen font-sans bg-white selection:bg-brand-primary selection:text-white">
      <Navbar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />

      <Routes>
        <Route path="/" element={
          <main>
            <section id="home">
              <Hero />
            </section>
            <Banner />
            <About />
            {/* <StatsRow /> */}
            <FeatureCategories />
            
            {/* <WhyChoose /> */}
            {/* <JournalsGrid loading={loading} filteredJournals={filteredJournals} /> */}
            <ConferenceSection />
            <Ebooks />
            {/* <AuthorSection /> */}
            <Newsletter />
            <ContactSection />
          </main>
        } />
        {/* <Route path="/category/:category" element={<CategoryPage />} /> */}
        <Route path="/journal/:journalId" element={<JournalPage />} />
      </Routes>

      <Footer />
    </div>
  );
}
