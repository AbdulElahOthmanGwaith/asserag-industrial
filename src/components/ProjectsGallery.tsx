import { MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ProjectsGallery = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: t('projects.items.project1.title'),
      location: t('projects.items.project1.location'),
      year: '2025',
      category: t('services.items.cleanrooms.title'),
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
      description: t('projects.items.project1.desc'),
      status: t('projects.status.completed')
    },
    {
      id: 2,
      title: t('projects.items.project2.title'),
      location: t('projects.items.project2.location'),
      year: '2024',
      category: 'Asenware Systems',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800',
      description: t('projects.items.project2.desc'),
      status: t('projects.status.completed')
    },
    {
      id: 3,
      title: t('projects.items.project3.title'),
      location: t('projects.items.project3.location'),
      year: '2024',
      category: 'Industrial Cooling',
      image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=800',
      description: t('projects.items.project3.desc'),
      status: t('projects.status.in_progress')
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold mb-4 font-cairo">
            {t('projects.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 font-cairo">{t('projects.title')}</h2>
          <div className="w-20 h-1.5 bg-accent mx-auto mb-6"></div>
          <p className="text-text-light max-w-3xl mx-auto font-cairo text-lg">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-dark font-cairo shadow-sm">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6 relative">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 font-cairo">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span>{project.year}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-dark mb-3 font-cairo group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 font-cairo">
                  {project.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-green-600 text-sm font-bold font-cairo bg-green-50 px-3 py-1 rounded-full">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{project.status}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
