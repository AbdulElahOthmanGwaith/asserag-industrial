import { Factory, Settings, Wrench, Lightbulb, ShieldCheck, AirVent } from 'lucide-react';

const services = [
  {
    title: 'توريد معدات مصانع الأدوية',
    description: 'توفير أحدث المعدات الصناعية المتوافقة مع المعايير الدولية GMP.',
    icon: <Factory className="w-12 h-12 text-primary" />,
  },
  {
    title: 'تركيب وتشغيل المصانع',
    description: 'فريق هندسي متخصص لتركيب خطوط الإنتاج وضمان تشغيلها بكفاءة عالية.',
    icon: <Settings className="w-12 h-12 text-primary" />,
  },
  {
    title: 'صيانة المعدات الصناعية',
    description: 'برامج صيانة وقائية وعلاجية لضمان استمرارية الإنتاج وتقليل الأعطال.',
    icon: <Wrench className="w-12 h-12 text-primary" />,
  },
  {
    title: 'استشارات فنية وهندسية',
    description: 'دراسات جدوى وتصاميم هندسية متكاملة لمصانع الأدوية والمختبرات.',
    icon: <Lightbulb className="w-12 h-12 text-primary" />,
  },
  {
    title: 'غرف نظيفة (Clean Rooms)',
    description: 'تصميم وتنفيذ الغرف النظيفة بأنظمة عزل وتحكم متطورة.',
    icon: <ShieldCheck className="w-12 h-12 text-primary" />,
  },
  {
    title: 'أنظمة التكييف والتهوية',
    description: 'حلول HVAC متخصصة للمنشآت الصناعية والطبية لضمان جودة الهواء.',
    icon: <AirVent className="w-12 h-12 text-primary" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 font-cairo">خدماتنا المتميزة</h2>
          <div className="w-20 h-1.5 bg-accent mx-auto mb-6"></div>
          <p className="text-text-light max-w-2xl mx-auto font-cairo">
            نقدم حلولاً هندسية وصناعية متكاملة تلبي احتياجات قطاع تصنيع الأدوية بأعلى معايير الجودة العالمية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-dark mb-3 font-cairo">{service.title}</h3>
              <p className="text-text-light font-cairo leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
