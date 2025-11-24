import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">CONTACT US</h3>
            <div className="space-y-2">
              <p className="flex items-start">
                <span className="mr-2">📍</span>
                <span>100 Donald Blvd, Red Deer, AB T4N 5H5</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                <span>
                  <a href="tel:+15878760888" className="hover:text-white transition-colors">+1 5878760888</a>
                  <span className="mx-1">/</span>
                  <a href="tel:+14035055756" className="hover:text-white transition-colors">+1 4035055756</a>
                </span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">✉️</span>
                <span>
                  <a href="mailto:gaoshuai099@gmail.com" className="hover:text-white transition-colors">gaoshuai099@gmail.com</a>
                  <span className="mx-1">/</span>
                  <a href="mailto:togunmuko@gmail.com" className="hover:text-white transition-colors">togunmuko@gmail.com</a>
                </span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">💬</span>
                <span>
                  <a href="https://wa.me/15878760888" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+1 5878760888</a>
                  <span className="mx-1">/</span>
                  <a href="https://wa.me/14035055756" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+1 4035055756</a>
                </span>
              </p>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">PRODUCTS</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="hover:text-white transition-colors">FLAG</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">BEACH FLAG</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">DISPLAY STAND</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">BANNER</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-white transition-colors">ABOUT US</Link></li>
              <li><Link to="/news" className="hover:text-white transition-colors">News</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Inquiry Form */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">SEND INQUIRY</h3>
            <p className="text-sm mb-4">
              There is nothing better than seeing the end result. Learn about new products and get the latest product sample album.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Click For Inquiry
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© COPYRIGHT - 2024 : Global Business Co., Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


