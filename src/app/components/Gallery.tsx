import Masonry from 'react-responsive-masonry';
import { ImageWithFallback } from './figma/ImageWithFallback';

import bucket1 from './images/bucket_1.jpg';
import bucket2 from './images/bucket_2.jpg';
import bucket3 from './images/bucket_3.jpg';
import bucket4 from './images/bucket_4.jpg';
import bucket5 from './images/bucket_5.jpg';
import bucket6 from './images/bucket_6.jpg';
import bucket7 from './images/bucket_7.jpg';
import bucket8 from './images/bucket_8.jpg';
import bucketAnniv from './images/bucket_anniv.jpg';
import bucketBunga from './images/bucket_bunga.jpg';
import bucketUang from './images/bucket_uang.jpg';
import graduationDoll from './images/graduation_doll.jpg';

export function Gallery() {
  const galleryImages = [
    {
      id: '1',
      src: bucket1,
      alt: 'Bucket bunga OyMaDear 1',
    },
    {
      id: '2',
      src: bucket2,
      alt: 'Bucket bunga OyMaDear 2',
    },
    {
      id: '3',
      src: bucket3,
      alt: 'Bucket bunga OyMaDear 3',
    },
    {
      id: '4',
      src: bucket4,
      alt: 'Bucket bunga OyMaDear 4',
    },
    {
      id: '5',
      src: bucket5,
      alt: 'Bucket bunga OyMaDear 5',
    },
    {
      id: '6',
      src: bucket6,
      alt: 'Bucket bunga OyMaDear 6',
    },
    {
      id: '7',
      src: bucket7,
      alt: 'Bucket bunga OyMaDear 7',
    },
    {
      id: '8',
      src: bucket8,
      alt: 'Bucket bunga OyMaDear 8',
    },
    {
      id: '9',
      src: bucketAnniv,
      alt: 'Bucket bunga anniversary OyMaDear',
    },
    {
      id: '10',
      src: bucketBunga,
      alt: 'Bucket bunga OyMaDear',
    },
    {
      id: '11',
      src: bucketUang,
      alt: 'Bucket uang OyMaDear',
    },
    {
      id: '12',
      src: graduationDoll,
      alt: 'Graduation doll OyMaDear',
    },
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
            Galeri{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-500">OyMaDear</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lihat beberapa contoh bucket bunga handmade OyMaDear yang pernah kami buat untuk pelanggan.
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
