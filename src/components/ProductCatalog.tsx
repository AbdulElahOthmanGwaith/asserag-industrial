import { useState } from 'react';
import { Search, Info, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ProductCatalog = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: t('catalog.categories.all') },
    { id: 'Unival Group', label: 'Unival Group' },
    { id: 'Eking Air', label: 'Eking Air' },
    { id: 'Asenware', label: 'Asenware' },
    { id: 'general', label: t('catalog.categories.general') }
  ];

  const products = [
    {
      id: 1,
      name: t('catalog.items.item1.name'),
      category: 'Eking Air',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
      description: t('catalog.items.item1.desc'),
      agency: `Eking Air ${t('catalog.agency_suffix_exclusive')}`
    },
    {
      id: 2,
      name: t('catalog.items.item2.name'),
      category: 'Unival Group',
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800',
      description: t('catalog.items.item2.desc'),
      agency: `Unival Group ${t('catalog.agency_suffix_partner')}`
    },
    {
      id: 3,
      name: t('catalog.items.item3.name'),
      category: 'Asenware',
      image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=800',
      description: t('catalog.items.item3.desc'),
      agency: `Asenware ${t('catalog.agency_suffix_authorized')}`
    },
    {
      id: 4,
      name: t('catalog.items.item4.name'),
      category: 'Unival Group',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
      description: t('catalog.items.item4.desc'),
      agency: 'Unival Group'
    },
    {
      id: 5,
      name: t('catalog.items.item5.name'),
      category: 'Asenware',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800',
      description: t('catalog.items.item5.desc'),
      agency: 'Asenware'
    },
    {
      id: 6,
      name: t('catalog.items.item6.name'),
      category: 'Eking Air',
      image: 'https://images.unsplash.com/photo-1504328332780-bc2d079595e8?auto=format&fit=crop&q=80&w=800',
      description: t('catalog.items.item6.desc'),
      agency: 'Eking Air'
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory || (selectedCategory === 'general' && !['Eking Air', 'Unival Group', 'Asenware'].includes(product.category));
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-24 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 font-cairo">{t('catalog.title')}</h2>
          <div className="w-20 h-1.5 bg-accent mx-auto mb-6"></div>
          <p className="text-text-light max-w-3xl mx-auto font-cairo text-lg">
            {t('catalog.subtitle')}
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 rtl:right-auto rtl:left-3" />
            <input
              type="text"
              placeholder={t('catalog.search_placeholder')}
              className="w-full pr-10 pl-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-cairo rtl:pr-4 rtl:pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-full whitespace-nowrap font-cairo transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-text-light border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
              <div className="aspect-video bg-gray-50 relative overflow-hidden flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-white font-cairo shadow-sm rtl:right-auto rtl:left-4">
                  {product.agency}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-dark mb-3 font-cairo">{product.name}</h3>
                <p className="text-text-light text-sm mb-6 font-cairo leading-relaxed flex-grow">
                  {product.description}
                </p>
                <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-primary text-sm font-bold font-cairo">
                    <Info className="w-4 h-4" />
                    <span>{t('catalog.availability')}</span>
                  </div>
                  <button className="text-accent hover:text-accent-dark transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
