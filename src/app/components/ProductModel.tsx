import { X, MessageCircle } from 'lucide-react';
import { Product } from './Products';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect } from 'react';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center rounded-t-3xl">
          <h2 className="text-2xl font-serif font-semibold text-gray-900">Product Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-serif font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-500">
                  {product.price}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
                <p className="text-gray-600 leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Available Variants</h4>
                <div className="space-y-2">
                  {product.variants.map((variant, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-pink-50 to-red-50 px-4 py-2 rounded-lg"
                    >
                      {variant}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={`https://wa.me/6281234567890?text=Hi! I'd like to order ${product.name}. Can you help me with the details?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-colors font-medium text-lg w-full"
                >
                  <MessageCircle size={24} />
                  Chat Admin to Order
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
