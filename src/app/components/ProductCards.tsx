import { MessageCircle } from 'lucide-react';
import { Product } from './Products';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
  onViewDetail: () => void;
}

export function ProductCard({ product, onViewDetail }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
        <p className="text-gray-600">{product.description}</p>
        
        <div className="flex flex-col gap-2 pt-2">
          <a
            href={`https://wa.me/6285336573814?text=Halo%20Admin%2C%20saya%20tertarik%20memesan%20${encodeURIComponent(
              product.name,
            )}%20di%20OyMaDear.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors font-medium"
          >
            <MessageCircle size={20} />
            Pesan via WhatsApp
          </a>
          <button
            onClick={onViewDetail}
            className="border-2 border-red-600 text-red-600 px-6 py-3 rounded-full hover:bg-red-50 transition-colors font-medium"
          >
            Lihat Detail
          </button>
        </div>
      </div>
    </div>
  );
}
