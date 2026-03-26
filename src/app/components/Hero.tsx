import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
  <section id="home" className="bg-gradient-to-br from-pink-50 to-red-50 pt-4 pb-16 md:pt-8 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900">
              Bucket Bunga Cantik untuk{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-500">
                Setiap Momen Spesial
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Bucket bunga handmade untuk hadiah, wisuda, ulang tahun, dan berbagai momen berharga lainnya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-red-600 to-pink-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all font-medium"
              >
                Lihat Produk
              </button>
              <a
                href="https://wa.me/6285336573814"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-full hover:bg-red-50 transition-colors font-medium text-center"
              >
                Chat Admin via WhatsApp
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1584972720792-5477c604d033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBidWNrZXQlMjBmbG93ZXIlMjBhcnJhbmdlbWVudCUyMHBpbmt8ZW58MXx8fHwxNzczNjgyMTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Bucket bunga cantik OyMaDear"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative gradient blob */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-red-300 to-pink-300 rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
