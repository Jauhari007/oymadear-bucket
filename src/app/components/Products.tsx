import { useState } from 'react';
import { ProductCard } from './ProductCards';
import { ProductModal } from './ProductModel';
import bucket1 from './images/bucket_1.jpg';
import bucket2 from './images/bucket_2.jpg';
import bucket3 from './images/bucket_3.jpg';
import bucket4 from './images/bucket_4.jpg';
import bucket5 from './images/bucket_5.jpg';
import bucket6 from './images/bucket_6.jpg';

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
      name: 'Black Elegance Bloom',
      description:
        'Bucket bunga nuansa hitam elegan + pita gold, kesan mewah & classy.',
      price: 'Rp 150.000',
      image: bucket1,
      fullDescription:
        'Bucket bunga dengan dominasi warna hitam elegan yang dipadukan dengan pita gold. Cocok untuk hadiah yang ingin terlihat mewah, classy, dan berkesan eksklusif di setiap momen spesial.',
      variants: [
        'Mini Black Elegance — ukuran kecil, nuansa hitam + pita gold.',
        'Signature Black Elegance — ukuran sedang dengan isi bunga lebih banyak.',
        'Grand Black Elegance — ukuran besar untuk momen super spesial.',
      ],
    },
    {
      id: '2',
      name: 'Silver Pastel Celebration',
      description:
        'Bucket bunga warna silver mix pastel — cocok untuk wisuda / achievement.',
      price: 'Rp 175.000',
      image: bucket2,
      fullDescription:
        'Bucket bunga dengan kombinasi warna silver elegan dan pastel lembut yang manis. Sangat cocok untuk hadiah wisuda, kenaikan jabatan, atau momen achievement lainnya yang ingin dirayakan dengan cara yang anggun dan istimewa.',
      variants: [
        'Basic Silver Pastel — bucket standar untuk ucapan selamat.',
        'Wisuda Silver Pastel — dengan sentuhan dekorasi wisuda/achievement.',
        'Premium Silver Pastel — isi bunga lebih banyak dan dekorasi ekstra mewah.',
      ],
    },
    {
      id: '3',
      name: 'Milky Joy Bouquet',
      description:
        'Bucket snack susu & manis-manis — kesan ceria & sweet gift.',
      price: 'Rp 165.000',
      image: bucket3,
      fullDescription:
        'Bucket snack dengan isian susu dan camilan manis yang disusun cantik seperti bouquet. Hadiah yang terasa fun, ceria, dan penuh manisnya perhatian untuk sahabat, pasangan, atau keluarga.',
      variants: [
        'Milky Joy Mini — isi snack susu & manis-manis ukuran kecil.',
        'Milky Joy Regular — isi lebih banyak untuk hadiah spesial.',
        'Milky Joy Party — paket besar untuk momen berbagi dan surprise.',
      ],
    },
    {
      id: '4',
      name: 'Sweet Crunch Fiesta',
      description:
        'Bucket snack warna-warni, fun & rame — cocok ulang tahun / surprise.',
      price: 'Rp 200.000',
      image: bucket4,
      fullDescription:
        'Bucket snack penuh warna dengan aneka camilan yang fun dan rame. Sempurna untuk hadiah ulang tahun, kejutan kecil yang seru, atau surprise party yang ingin terasa meriah dan berkesan.',
      variants: [
        'Sweet Crunch Mini — isi snack pilihan ukuran kecil.',
        'Sweet Crunch Party — isi lebih banyak untuk momen kumpul bareng.',
        'Sweet Crunch Jumbo — paket besar untuk kejutan yang super rame.',
      ],
    },
    {
      id: '5',
      name: 'Choco Royal Treat',
      description:
        'Bucket dominan coklat premium — kesan eksklusif & "wow".',
      price: 'Rp 180.000',
      image: bucket5,
      fullDescription:
        'Bucket snack dengan dominasi coklat premium yang disusun rapi dan elegan. Hadiah yang memberi kesan eksklusif, manis, dan benar-benar "wow" untuk orang tersayang maupun kolega.',
      variants: [
        'Choco Royal Basic — kombinasi coklat favorit ukuran standar.',
        'Choco Royal Deluxe — isi coklat lebih banyak dan premium.',
        'Choco Royal Signature — paket besar dengan pilihan coklat eksklusif.',
      ],
    },
    {
      id: '6',
      name: 'Candy Blast Surprise',
      description:
        'Bucket permen merah ramai — vibes heboh & playful.',
      price: 'Rp 155.000',
      image: bucket6,
      fullDescription:
        'Bucket permen dengan dominasi warna merah yang ramai dan mencuri perhatian. Cocok untuk kejutan seru, hadiah untuk anak-anak, atau siapa pun yang suka vibes heboh, playful, dan penuh warna.',
      variants: [
        'Candy Blast Mini — isi permen pilihan ukuran kecil.',
        'Candy Blast Fun — ukuran sedang untuk hadiah dan surprise.',
        'Candy Blast Max — paket penuh permen merah yang super heboh.',
      ],
    },
  ];

  return (
    <section id="products" className="py-16 md:py-24 bg-gradient-to-br from-pink-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
            Produk{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-500">
              OyMaDear
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan koleksi bucket bunga handmade OyMaDear yang dibuat dengan sepenuh hati untuk setiap momen spesial.
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
