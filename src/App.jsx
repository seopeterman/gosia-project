import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';
import NewsList from './pages/NewsList';
import NewsSingle from './pages/NewsSingle';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import NotFound from './pages/NotFound.jsx';
import FaqPage from './pages/FaqPage.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiesPolicy from './pages/CookiesPolicy';
import ScrollToTop from './components/ScrollToTop';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {
  return (
    <div>
      <Header />
      <main>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/news" element={<NewsList />} />
        <Route path="/news/:slug" element={<NewsSingle />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;
