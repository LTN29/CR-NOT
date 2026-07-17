import { useTranslation } from 'react-i18next';

const products = [
  {
    id: 1,
    name: "Máy triệt lông mini vĩnh viễn Crenot Graci X3 tẩy lông lạnh",
    price: "2.551.000đ",
    originalPrice: "3.330.000đ",
    discount: "-24%"
  },
  {
    id: 2,
    name: "Cân sức khỏe điện tử Crenot Gofit S2 cân phân tích lượng",
    price: "544.000đ",
    originalPrice: "685.000đ",
    discount: "-21%"
  },
  {
    id: 3,
    name: "Cân điện tử sức khoẻ thông minh Crenot Gofit X6 Pro cân",
    price: "1.077.000đ",
    originalPrice: "1.440.000đ",
    discount: "-26%"
  },
  {
    id: 4,
    name: "Cân sức khỏe điện tử Crenot inBody i8 cân phân tích lượng",
    price: "2.244.000đ",
    originalPrice: "2.865.000đ",
    discount: "-22%"
  }
];

export default function Products() {
  const { t } = useTranslation();

  return (
    <section className="py-32 relative z-10" id="products">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4 text-gradient">
            {t('products.title')}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="glass-card flex flex-col overflow-hidden group cursor-pointer">
              {/* Image Placeholder */}
              <div className="aspect-square bg-surface/50 w-full relative flex items-center justify-center p-6 transition-transform duration-500 group-hover:scale-105">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#d71920] text-white text-xs font-bold px-2 py-1 rounded-sm">
                    {product.discount}
                  </span>
                </div>
                {/* Empty img for future use */}
                <img src="" alt={product.name} className="w-full h-full object-contain opacity-0" />
                <span className="absolute text-text-muted/30 font-heading text-sm uppercase tracking-widest pointer-events-none">CRÉNOT BEAUTY</span>
              </div>
              
              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-sm font-sans font-medium text-text/90 line-clamp-2 mb-4 leading-relaxed group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                
                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl font-bold text-accent">{product.price}</span>
                  </div>
                  <div className="text-sm text-text-muted line-through font-light">
                    {product.originalPrice}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
