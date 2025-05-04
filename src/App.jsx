
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Layout from '@/components/layout/Layout';
import HomePage from '@/components/pages/HomePage';
import AboutPage from '@/components/pages/AboutPage';
import ServicesPage from '@/components/pages/ServicesPage';
import PortfolioPage from '@/components/pages/PortfolioPage';
import BlogPage from '@/components/pages/BlogPage';
import ContactPage from '@/components/pages/ContactPage';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <Router>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
      </Layout>
      <Toaster />
    </Router>
  );
}

export default App;
