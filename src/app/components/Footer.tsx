import { Instagram, MessageCircle } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-red-900 to-red-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">OyMaDear</h3>
            <p className="text-red-100 mb-4">
              Bucket bunga handmade untuk momen spesial Anda.
              Kualitas, kreativitas, dan kebahagiaan pelanggan di setiap rangkaian.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Menu Cepat</h4>
            <ul className="space-y-2 text-red-100">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">
                  Tentang Kami
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="hover:text-white transition-colors">
                  Produk
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="hover:text-white transition-colors">
                  Galeri
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">
                  Kontak
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Ikuti Kami</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/oymadear.id"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@oymadear.id"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="TikTok"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/6285336573814"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-red-600 pt-8 text-center text-red-100">
          <p>
            &copy; {new Date().getFullYear()} OyMaDear. Semua hak cipta dilindungi. Dibuat dengan penuh cinta untuk setiap momen spesial.
          </p>
        </div>
      </div>
    </footer>
  );
}
