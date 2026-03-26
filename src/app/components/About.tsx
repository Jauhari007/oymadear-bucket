import { Heart, Sparkles, Users } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Heart,
      title: 'Bahan Berkualitas',
      description: 'Kami hanya menggunakan bunga segar dan material premium untuk setiap rangkaian.',
    },
    {
      icon: Sparkles,
      title: 'Desain Kreatif',
      description: 'Setiap bucket dibuat unik dengan sentuhan kreativitas dan detail yang rapi.',
    },
    {
      icon: Users,
      title: 'Kepuasan Pelanggan',
      description: 'Kepuasan Anda adalah prioritas kami. Setiap pesanan dibuat untuk menghadirkan senyuman.',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
            Tentang{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-500">OyMaDear</span>
          </h2>
          <p className="text-lg text-gray-600">
            OyMaDear adalah brand bucket bunga handmade yang berfokus pada rangkaian cantik dan penuh makna
            untuk setiap momen spesial Anda. Kami percaya setiap perayaan layak mendapat sentuhan elegan dan
            penuh cinta, yang kami tuangkan dalam setiap bucket yang kami buat.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-pink-50 to-red-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-red-600 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
