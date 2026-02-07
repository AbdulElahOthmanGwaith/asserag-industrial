import { Factory, Settings, Wrench, Lightbulb, ShieldCheck, AirVent } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.items.supply.title'),
      description: t('services.items.supply.desc'),
      icon: <Factory className="w-12 h-12 text-primary" />,
    },
    {
      title: t('services.items.installation.title'),
      description: t('services.items.installation.desc'),
      icon: <Settings className="w-12 h-12 text-primary" />,
    },
    {
      title: t('services.items.maintenance.title'),
      description: t('services.items.maintenance.desc'),
      icon: <Wrench className="w-12 h-12 text-primary" />,
    },
    {
      title: t('services.items.consulting.title'),
      description: t('services.items.consulting.desc'),
      icon: <Lightbulb className="w-12 h-12 text-primary" />,
    },
    {
      title: t('services.items.cleanrooms.title'),
      description: t('services.items.cleanrooms.desc'),
      icon: <ShieldCheck className="w-12 h-12 text-primary" />,
    },
    {
      title: t('services.items.hvac.title'),
      description: t('services.items.hvac.desc'),
      icon: <AirVent className="w-12 h-12 text-primary" />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-light scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 font-cairo">{t('services.title')}</h2>
          <div className="w-20 h-1.5 bg-accent mx-auto mb-6"></div>
          <p className="text-text-light max-w-2xl mx-auto font-cairo">
            {t('services.subtitle')}
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
