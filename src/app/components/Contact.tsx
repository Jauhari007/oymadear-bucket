import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-pink-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-500">Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visit our store or get in touch with us for custom orders and inquiries
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
                  <h3 className="font-semibold text-gray-900 mb-2">Our Address</h3>
                  <p className="text-gray-600">
                    Jl. Mawar Indah No. 123<br />
                    Kelurahan Bunga Raya<br />
                    Jakarta Selatan, 12345
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
                  <h3 className="font-semibold text-gray-900 mb-2">Phone & WhatsApp</h3>
                  <p className="text-gray-600 mb-2">+62 812-3456-7890</p>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
                  >
                    <MessageCircle size={18} />
                    Chat on WhatsApp
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
                  <h3 className="font-semibold text-gray-900 mb-2">Opening Hours</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Friday: 09:00 - 20:00</p>
                    <p>Saturday: 09:00 - 21:00</p>
                    <p>Sunday: 10:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="w-full h-full min-h-[400px] bg-gradient-to-br from-red-100 to-pink-100 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin size={64} className="text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Map Location</h3>
                <p className="text-gray-600 mb-4">
                  Find us on the map
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-red-600 to-pink-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all font-medium"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
