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
                <span>Dingcheng Industrial Park, Lanshan District, Linyi City, Shandong Province, China</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                <span>+86-17653953909</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">✉️</span>
                <span>amy@aozhanflag.com</span>
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


