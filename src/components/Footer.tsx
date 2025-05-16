import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-green-900 text-white py-6 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Social Icons */}
                <div className="flex gap-4 text-xl">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FaFacebookF className="hover:text-orange-400 transition" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram className="hover:text-orange-400 transition" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FaTwitter className="hover:text-orange-400 transition" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                        <FaYoutube className="hover:text-orange-400 transition" />
                    </a>
                </div>

                {/* Legal Links */}
                <div className="text-sm space-x-4">
                    <a href="#privacy" className="hover:underline">Privacy Policy</a>
                    <a href="#terms" className="hover:underline">Terms</a>
                    <a href="#contact" className="hover:underline">Contact</a>
                </div>

                {/* Copyright */}
                <div className="text-sm text-gray-300 text-center md:text-right">
                    &copy; {new Date().getFullYear()} JuiceBar. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
