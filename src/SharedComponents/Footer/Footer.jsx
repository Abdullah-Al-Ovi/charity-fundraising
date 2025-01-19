import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer className="bg-white shadow-md border-t-2 border-black text-gray-800 py-10">
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Us Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">About Us</h3>
              <p>
                Farjana&apos;s Charity is dedicated to empowering communities and
                creating positive change through impactful initiatives. Together,
                we can make a difference.
              </p>
            </div>
  
            {/* Quick Links Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-gray-600">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/donate" className="hover:text-gray-600">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-gray-600">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-gray-600">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-gray-600">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/video" className="hover:text-gray-600">
                    Video
                  </Link>
                </li>
              </ul>
            </div>
  
            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact</h3>
              <ul className="space-y-2">
                <li>Email: contact@farjanascharity.com</li>
                <li>Phone: +8801745281921</li>
                <li>Address: Barishal Sadar, Barishal</li>
                <li>
                  <a
                    href="https://www.facebook.com"
                    className="hover:text-gray-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow us on Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Divider */}
          <div className="border-t border-gray-200 my-6"></div>
  
          {/* Copyright Section */}
          <div className="text-center text-sm text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} Farjana&apos;s Charity. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  