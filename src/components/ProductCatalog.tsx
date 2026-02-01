import { useState } from 'react';
import { Search, Info, ExternalLink } from 'lucide-react';

const categories = ['الكل', 'Unival Group', 'Eking Air', 'Asenware', 'تجهيزات عامة'];

const products = [
  {
    id: 1,
    name: 'وحدات مناولة الهواء (AHU) المتخصصة',
    category: 'Eking Air',
    image: '/images/logo.jpeg',
    description: 'أنظمة تكييف مركزية متطورة مصممة خصيصاً لمصانع الأدوية، توفر تحكماً دقيقاً في الحرارة والرطوبة ونقاء الهواء.',
    agency: 'Eking Air - الوكيل الحصري'
  },
  {
    id: 2,
    name: 'أنظمة الغرف النظيفة (Turnkey Cleanrooms)',
    category: 'Unival Group',
    image: '/images/logo.jpeg',
    description: 'حلول متكاملة تشمل ألواح الساندوتش، الأبواب، والنوافذ المخصصة للمناطق العقيمة بمعايير GMP العالمية.',
    agency: 'Unival Group - شريك استراتيجي'
  },
  {
    id: 3,
    name: 'لوحات إنذار الحريق القابلة للعنونة',
    category: 'Asenware',
    image: '/images/logo.jpeg',
    description: 'أنظمة سلامة ذكية توفر حماية متكاملة للمنشآت الصناعية الكبرى مع إمكانية المراقبة المركزية.',
    agency: 'Asenware - الوكيل المعتمد'
  },
  {
    id: 4,
    name: 'آلات تعبئة وتغليف صيدلانية',
    category: 'Unival Group',
    image: '/images/logo.jpeg',
    description: 'معدات إنتاج عالية الكفاءة لتعبئة الكبسولات والسوائل، مصنعة من أجود أنواع الستانلس ستيل المقاوم للصدأ.',
    agency: 'Unival Group'
  },
  {
    id: 5,
    name: 'أنظمة إطفاء الحريق بالغاز (FM200)',
    category: 'Asenware',
    image: '/images/logo.jpeg',
    description: 'حلول إطفاء تلقائية متقدمة لحماية غرف الخوادم والمعدات الحساسة في المصانع.',
    agency: 'Asenware'
  },
  {
    id: 6,
    name: 'مبردات المياه الصناعية (Chillers)',
    category: 'Eking Air',
    image: '/images/logo.jpeg',
    description: 'أنظمة تبريد عالية القدرة موفرة للطاقة تدعم خطوط الإنتاج الكبيرة في الصناعات الدوائية.',
    agency: 'Eking Air'
  },
];

const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'الكل' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 font-cairo">كتالوج الوكالات العالمية</h2>
          <div className="w-20 h-1.5 bg-accent mx-auto mb-6"></div>
          <p className="text-text-light max-w-3xl mx-auto font-cairo text-lg">
            نحن نفخر بكوننا الوكلاء والموزعين المعتمدين لأكبر الشركات العالمية في مجال التجهيزات الصناعية، مما يضمن لكم الحصول على أفضل التقنيات في اليمن وجنوب أفريقيا.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="ابحث عن معدة أو نظام عالمي..."
              className="w-full pr-10 pl-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-cairo"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full whitespace-nowrap font-cairo transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-text-light border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {cat}
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
                  className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-white font-cairo shadow-sm">
                  {product.agency || product.category}
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
                    <span>متوفر في اليمن وجنوب أفريقيا</span>
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
