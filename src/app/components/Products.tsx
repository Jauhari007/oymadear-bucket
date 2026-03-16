import { useState } from 'react';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  fullDescription: string;
  variants: string[];
}

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: '1',
      name: 'Pink Romance Bucket',
      description: 'Elegant pink roses arrangement perfect for romantic occasions',
      price: 'Rp 150.000',
      image: 'https://images.unsplash.com/photo-1584972720792-5477c604d033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBidWNrZXQlMjBmbG93ZXIlMjBhcnJhbmdlbWVudCUyMHBpbmt8ZW58MXx8fHwxNzczNjgyMTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      fullDescription: 'A stunning arrangement of fresh pink roses carefully placed in a decorative bucket. Perfect for anniversaries, Valentine\'s Day, or just to show someone you care. Each rose is hand-selected for its beauty and freshness.',
      variants: ['Small (10 roses)', 'Medium (20 roses)', 'Large (30 roses)'],
    },
    {
      id: '2',
      name: 'Graduation Glory',
      description: 'Special bucket arrangement to celebrate academic achievements',
      price: 'Rp 175.000',
      image: 'https://images.unsplash.com/photo-1662326495491-764da874b01f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwZmxvd2VyJTIwYm91cXVldCUyMGJ1Y2tldHxlbnwxfHx8fDE3NzM2ODIxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      fullDescription: 'Celebrate the graduate\'s achievement with this specially designed bucket arrangement. Features a mix of vibrant flowers symbolizing success and new beginnings. Can be customized with school colors or personal preferences.',
      variants: ['Standard', 'Deluxe with teddy bear', 'Premium with money holder'],
    },
    {
      id: '3',
      name: 'Birthday Bliss',
      description: 'Cheerful arrangement to make birthday celebrations extra special',
      price: 'Rp 165.000',
      image: 'https://images.unsplash.com/photo-1772688168226-c0968d4816ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGZsb3dlciUyMGFycmFuZ2VtZW50JTIwcm9zZXxlbnwxfHx8fDE3NzM2ODIxNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      fullDescription: 'A joyful mix of colorful blooms designed to brighten anyone\'s birthday. This arrangement combines roses, carnations, and seasonal flowers to create a festive and cheerful display.',
      variants: ['Classic', 'With balloon', 'With birthday cake topper'],
    },
    {
      id: '4',
      name: 'Premium Pink Dreams',
      description: 'Luxury pink roses arrangement for the most special occasions',
      price: 'Rp 200.000',
      image: 'https://images.unsplash.com/photo-1587371921769-eda287cc0209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcm9zZSUyMGJvdXF1ZXQlMjBwcmVtaXVtfGVufDF8fHx8MTc3MzY4MjE3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      fullDescription: 'Our premium collection featuring the finest pink roses arranged in an elegant bucket. Perfect for proposals, anniversaries, or when only the best will do. Includes premium wrapping and personalized message card.',
      variants: ['Premium (40 roses)', 'Luxury (60 roses)', 'Custom arrangement'],
    },
    {
      id: '5',
      name: 'Red Passion',
      description: 'Bold red roses arrangement expressing deep love and passion',
      price: 'Rp 180.000',
      image: 'https://images.unsplash.com/photo-1671761950074-c623f925c089?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXIlMjBhcnJhbmdlbWVudCUyMHJlZCUyMHJvc2VzfGVufDF8fHx8MTc3MzY4MjE3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      fullDescription: 'Express your deepest feelings with this stunning red rose arrangement. Each velvety red rose is carefully selected and arranged to create a dramatic and romantic display that speaks volumes.',
      variants: ['Standard (15 roses)', 'Deluxe (25 roses)', 'Ultimate (50 roses)'],
    },
    {
      id: '6',
      name: 'Pastel Paradise',
      description: 'Soft pastel flowers creating a dreamy, gentle atmosphere',
      price: 'Rp 155.000',
      image: 'https://images.unsplash.com/photo-1610507121084-0cb0661c72bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0ZWwlMjBmbG93ZXIlMjBib3VxdWV0JTIwYmFza2V0fGVufDF8fHx8MTc3MzY4MjE3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      fullDescription: 'A delicate combination of pastel-colored flowers including roses, carnations, and baby\'s breath. Perfect for baby showers, bridal events, or anyone who loves soft, dreamy aesthetics.',
      variants: ['Petite', 'Regular', 'Grande'],
    },
  ];

  return (
    <section id="products" className="py-16 md:py-24 bg-gradient-to-br from-pink-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-500">Products</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of handcrafted bucket flower arrangements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetail={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
