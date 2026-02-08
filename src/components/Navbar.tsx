import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-2">
          <img src="images/logo.jpeg" alt="Al-Seraj Logo" className="h-12 w-auto rounded" />
          <span className="text-white font-bold text-xl font-cairo hidden md:block">{t('navbar.brand')}</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-white font-cairo">
          <a href="#hero" className="hover:text-accent transition-colors">{t('navbar.home')}</a>
          <a href="#about" className="hover:text-accent transition-colors">{t('navbar.about')}</a>
          <a href="#services" className="hover:text-accent transition-colors">{t('navbar.services')}</a>
          <a href="#products" className="hover:text-accent transition-colors">{t('navbar.products')}</a>
          <a href="#contact-form" className="hover:text-accent transition-colors">{t('navbar.contact')}</a>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="text-white hover:text-accent font-cairo text-sm border border-white/20 px-3 py-1 rounded-md transition-all"
          >
            {t('navbar.language')}
          </button>
          <a href="#contact-form" className="bg-accent hover:bg-accent-dark text-white px-6 py-2 rounded-full font-cairo transition-all">
            {t('navbar.cta')}
          </a>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark border-t border-white/10 px-4 py-6 flex flex-col gap-4 text-white font-cairo animate-fade-in">
          <a href="#hero" onClick={() => setIsMenuOpen(false)} className="hover:text-accent transition-colors">{t('navbar.home')}</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-accent transition-colors">{t('navbar.about')}</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-accent transition-colors">{t('navbar.services')}</a>
          <a href="#products" onClick={() => setIsMenuOpen(false)} className="hover:text-accent transition-colors">{t('navbar.products')}</a>
          <a href="#contact-form" onClick={() => setIsMenuOpen(false)} className="hover:text-accent transition-colors">{t('navbar.contact')}</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
