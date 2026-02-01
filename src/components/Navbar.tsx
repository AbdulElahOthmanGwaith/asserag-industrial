import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-2">
          <img src="/images/logo.jpeg" alt="Al-Seraj Logo" className="h-12 w-auto rounded" />
          <span className="text-white font-bold text-xl font-cairo hidden md:block">السراج للتجهيزات الصناعية</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-white font-cairo">
          <a href="#hero" className="hover:text-accent transition-colors">الرئيسية</a>
          <a href="#about" className="hover:text-accent transition-colors">من نحن</a>
          <a href="#services" className="hover:text-accent transition-colors">خدماتنا</a>
          <a href="#products" className="hover:text-accent transition-colors">المنتجات</a>
          <a href="#contact" className="hover:text-accent transition-colors">تواصل معنا</a>
        </div>

        <button className="bg-accent hover:bg-accent-dark text-white px-6 py-2 rounded-full font-cairo transition-all">
          اطلب استشارة
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
