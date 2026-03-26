import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-pink-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
            Kontak <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-500">Kami</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Silakan kunjungi toko kami atau hubungi lewat WhatsApp untuk pemesanan custom dan pertanyaan lainnya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Alamat Kami</h3>
                  <p className="text-gray-600">
                    Jl. R.A. Kartini, Wage, Cangkringmalang<br />
                    Kec. Beji, Pasuruan<br />
                    Jawa Timur 67154
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Telepon & WhatsApp</h3>
                  <p className="text-gray-600 mb-2">+62 853-3657-3814</p>
                  <a
                    href="https://wa.me/6285336573814"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
                  >
                    <MessageCircle size={18} />
                    Chat via WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Jam Operasional</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Senin - Jumat: 09.00 - 16.00</p>
                    <p>Sabtu: 09.00 - 16.00</p>
                    <p>Minggu: 10.00 - 16.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="w-full h-full min-h-[400px]">
              <iframe
                title="Lokasi OyMaDear di Google Maps"
                src="https://www.google.com/maps?q=Jl.+R.A.+Kartini,+Wage,+Cangkringmalang,+Kec.+Beji,+Pasuruan,+Jawa+Timur+67154&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-4 border-t border-gray-200 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-gray-700 text-sm md:text-base">
                <MapPin size={20} className="text-red-500" />
                <span>Jl. R.A. Kartini, Wage, Cangkringmalang, Beji, Pasuruan</span>
              </div>
              <a
                href="https://maps.app.goo.gl/MLy68QDPr7rxcXqv7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-red-600 to-pink-500 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all font-medium text-sm md:text-base"
              >
                Buka di Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
