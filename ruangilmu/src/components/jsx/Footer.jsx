// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo ruangilmu.svg';

const Footer = () => {
  return (
    <footer className="bg-[#D2E6E4] md:px-24 py-12 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <Link to="/" className="flex items-center space-x-2">
                <img src={logo} alt="RuangIlmu Logo" className="h-8" />
                <span className="text-xl font-extrabold text-[#026078]">RuangIlmu</span>
              </Link>
            </div>
            <p className="text-[#026078] max-w-xs">
              Membantu perjalanan belajarmu dengan kelas online yang seru dan berkualitas!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-[#026078] mb-4">Perusahaan</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-[#026078] hover:underline">Tentang Kami</Link></li>
                <li><Link to="/careers" className="text-[#026078] hover:underline">Karir</Link></li>
                <li><Link to="/blog" className="text-[#026078] hover:underline">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#026078] mb-4">Dukungan</h3>
              <ul className="space-y-2">
                <li><Link to="/help" className="text-[#026078] hover:underline">Pusat Bantuan</Link></li>
                <li><Link to="/contact" className="text-[#026078] hover:underline">Kontak Kami</Link></li>
                <li><Link to="/faq" className="text-[#026078] hover:underline">Pertanyaan</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#026078] mb-4">Hukum</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-[#026078] hover:underline">Kebijakan Privasi</Link></li>
                <li><Link to="/terms" className="text-[#026078] hover:underline">Persyaratan Layanan</Link></li>
                <li><Link to="/cookies" className="text-[#026078] hover:underline">Kebijakan Cookie</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#026078]/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#026078] mb-4 md:mb-0">© 2023 RuangIlmu. Semua hak dilindungi undang-undang.</p>
          <div className="flex space-x-6">
            <a href="https://facebook.com" className="text-[#026078] hover:text-[#014b60]" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd">
                </path>
              </svg>
            </a>
            <a href="https://instagram.com" className="text-[#026078] hover:text-[#014b60]" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 3.807.058h.468c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd">
                </path>
              </svg>
            </a>
            <a href="https://twitter.com" className="text-[#026078] hover:text-[#014b60]" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                </path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;