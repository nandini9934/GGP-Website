import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="container mx-auto">
      <nav className="bg-peach py-4 px-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" height={60} width={60} alt="Logo" />
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="block md:hidden">
            <button
              onClick={toggleMenu}
              className="text-orange-500 hover:text-orange-500 focus:outline-none"
            >
              {/* Hamburger icon */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } md:flex md:items-center md:space-x-8 space-y-4 md:space-y-0 mt-4 md:mt-0 mr-96`}
          >
            <Link
              href="/privacy-policy"
              className={`block text-gray-500 font-bold ${
                pathname === '/privacy-policy'
                  ? 'active'
                  : 'hover:text-orange-500 hover:underline'
              }`}
            >
              Home
            </Link>

            <Link
              href="/payment"
              className={`block text-gray-500 font-bold ${
                pathname === '/payment'
                  ? 'active'
                  : 'hover:text-orange-500 hover:underline'
              }`}
            >
              Why Choose Us
            </Link>

            <Link
              href="/terms"
              className={`block text-gray-500 font-bold ${
                pathname === '/terms'
                  ? 'active'
                  : 'hover:text-orange-500 hover:underline'
              }`}
            >
              Team
            </Link>

            <Link
              href="/contactform"
              className={`block text-gray-500 font-bold ${
                pathname === '/contactform'
                  ? 'active'
                  : 'hover:text-orange-500 hover:underline'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
}
