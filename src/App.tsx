import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ProductCatalog from './components/ProductCatalog';
import ProjectsGallery from './components/ProjectsGallery';
import ContactForm from './components/ContactForm';
import WhatsAppButton from './components/WhatsAppButton';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white font-cairo" dir="rtl">
        <Navbar />
        
        <main>
          <Hero />
          
          {/* Global Presence Section */}
          <section id="about" className="py-24 bg-white scroll-mt-20">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1">
                  <div className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-full text-sm font-bold mb-4 font-cairo">
                    ريادة إقليمية وعالمية
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-dark mb-8 font-cairo leading-tight">
                    السراج للتجهيزات الصناعية: <br/>
                    <span className="text-primary">نحن نبني مستقبل الصناعة الدوائية</span>
                  </h2>
                  <p className="text-text-light text-lg mb-6 leading-relaxed font-cairo">
                    تعتبر شركة السراج الشريك الاستراتيجي الأول والوكيل المعتمد لكبرى الشركات العالمية (Unival Group, Eking Air, Asenware) في اليمن وجنوب أفريقيا. نحن نتخصص في تقديم حلول هندسية متكاملة لإنشاء وصيانة مصانع الأدوية وفقاً لأعلى معايير الجودة العالمية (GMP).
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                    <div className="p-6 bg-gray-50 rounded-2xl border-r-4 border-primary">
                      <h4 className="font-bold text-xl mb-2 font-cairo text-dark">تغطية واسعة</h4>
                      <p className="text-text-light font-cairo">مشاريع كبرى في اليمن وجنوب أفريقيا، وفريق هندسي متنقل لتلبية احتياجاتكم.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-2xl border-r-4 border-accent">
                      <h4 className="font-bold text-xl mb-2 font-cairo text-dark">وكالات حصرية</h4>
                      <p className="text-text-light font-cairo">نحن نمثل أفضل التقنيات العالمية في أنظمة التكييف، الغرف النظيفة، وسلامة المنشآت.</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 relative">
                  <div className="relative z-10 w-full h-[500px] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src="images/logo.jpeg" 
                      alt="Industrial Excellence" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>
                  
                  {/* Stats Overlay */}
                  <div className="absolute -bottom-8 left-8 bg-white p-8 rounded-2xl shadow-xl z-20 border border-gray-100 hidden md:block">
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary">+15</div>
                        <div className="text-sm text-text-light font-cairo">وكالة عالمية</div>
                      </div>
                      <div className="w-px h-12 bg-gray-200"></div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-accent">+100</div>
                        <div className="text-sm text-text-light font-cairo">مشروع صناعي</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Services />
          
          {/* Partners Section */}
          <section className="py-16 bg-white border-y border-gray-100">
            <div className="container mx-auto px-4">
              <p className="text-center text-gray-400 font-bold mb-10 font-cairo uppercase tracking-widest">وكالاتنا وشركاؤنا العالميون</p>
              <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 hover:opacity-100 transition-opacity">
                <div className="text-2xl font-bold text-gray-600 grayscale hover:grayscale-0 transition-all cursor-pointer">UNIVAL GROUP</div>
                <div className="text-2xl font-bold text-gray-600 grayscale hover:grayscale-0 transition-all cursor-pointer">EKING AIR</div>
                <div className="text-2xl font-bold text-gray-600 grayscale hover:grayscale-0 transition-all cursor-pointer">ASENWARE</div>
                <div className="text-2xl font-bold text-gray-600 grayscale hover:grayscale-0 transition-all cursor-pointer">KINGAIR</div>
              </div>
            </div>
          </section>

          <ProductCatalog />
          <ProjectsGallery />
          <ContactForm />

          {/* Call to Action Section */}
          <section id="contact-cta" className="py-24 bg-dark relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-cairo">هل تخطط لإنشاء أو صيانة مصنعك؟</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-cairo leading-relaxed">
                فريقنا الهندسي في اليمن وجنوب أفريقيا جاهز لتقديم الدعم الكامل من الاستشارة الفنية وحتى التشغيل النهائي.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a 
                  href="https://wa.me/967777603050" 
                  className="bg-accent hover:bg-accent-dark text-white text-lg font-bold px-12 py-4 rounded-full transition-all font-cairo shadow-lg shadow-accent/30"
                >
                  تواصل معنا الآن
                </a>
                <a 
                  href="#contact-form"
                  className="bg-white/10 hover:bg-white/20 text-white text-lg font-bold px-12 py-4 rounded-full transition-all font-cairo backdrop-blur-md inline-block"
                >
                  طلب عرض سعر مشروع
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="py-12 bg-darker border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-3">
                <img src="images/logo.jpeg" alt="Al-Seraj Logo" className="h-10 w-auto rounded" />
                <span className="text-white font-bold text-lg font-cairo">السراج للتجهيزات الصناعية</span>
              </div>
              <div className="flex gap-8 text-gray-500 font-cairo text-sm">
                <a href="#about" className="hover:text-white transition-colors">من نحن</a>
                <a href="#services" className="hover:text-white transition-colors">خدماتنا</a>
                <a href="#contact-form" className="hover:text-white transition-colors">تواصل معنا</a>
              </div>
              <p className="text-gray-500 font-cairo text-sm">© {new Date().getFullYear()} جميع الحقوق محفوظة.</p>
            </div>
          </div>
        </footer>

        <WhatsAppButton />
      </div>
    </ErrorBoundary>
  );
}

export default App;
