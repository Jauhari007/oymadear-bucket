import Masonry from 'react-responsive-masonry';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Gallery() {
  const galleryImages = [
    {
      id: '1',
      src: 'https://images.unsplash.com/photo-1584972720792-5477c604d033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBidWNrZXQlMjBmbG93ZXIlMjBhcnJhbmdlbWVudCUyMHBpbmt8ZW58MXx8fHwxNzczNjgyMTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Pink luxury arrangement',
    },
    {
      id: '2',
      src: 'https://images.unsplash.com/photo-1662326495491-764da874b01f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwZmxvd2VyJTIwYm91cXVldCUyMGJ1Y2tldHxlbnwxfHx8fDE3NzM2ODIxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Graduation bouquet',
    },
    {
      id: '3',
      src: 'https://images.unsplash.com/photo-1772688168226-c0968d4816ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGZsb3dlciUyMGFycmFuZ2VtZW50JTIwcm9zZXxlbnwxfHx8fDE3NzM2ODIxNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Birthday arrangement',
    },
    {
      id: '4',
      src: 'https://images.unsplash.com/photo-1587371921769-eda287cc0209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcm9zZSUyMGJvdXF1ZXQlMjBwcmVtaXVtfGVufDF8fHx8MTc3MzY4MjE3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Premium pink roses',
    },
    {
      id: '5',
      src: 'https://images.unsplash.com/photo-1671761950074-c623f925c089?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXIlMjBhcnJhbmdlbWVudCUyMHJlZCUyMHJvc2VzfGVufDF8fHx8MTc3MzY4MjE3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Red roses arrangement',
    },
    {
      id: '6',
      src: 'https://images.unsplash.com/photo-1610507121084-0cb0661c72bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0ZWwlMjBmbG93ZXIlMjBib3VxdWV0JTIwYmFza2V0fGVufDF8fHx8MTc3MzY4MjE3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Pastel flower bouquet',
    },
    {
      id: '7',
      src: 'https://images.unsplash.com/photo-1714328013428-a7a60f200e24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcHJpbmclMjBmbG93ZXIlMjBhcnJhbmdlbWVudCUyMGNvbG9yZnVsfGVufDF8fHx8MTc3MzY4MjE4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Colorful spring arrangement',
    },
    {
      id: '8',
      src: 'https://images.unsplash.com/photo-1584972720792-5477c604d033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBidWNrZXQlMjBmbG93ZXIlMjBhcnJhbmdlbWVudCUyMHBpbmt8ZW58MXx8fHwxNzczNjgyMTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Elegant pink arrangement',
    },
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-500">Gallery</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our beautiful collection of handcrafted bucket flower arrangements
          </p>
        </div>

        <Masonry columnsCount={3} gutter="1rem" className="hidden md:block">
          {galleryImages.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </Masonry>

        {/* Mobile Grid */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {galleryImages.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-2xl shadow-md">
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
