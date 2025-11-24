import { Link } from 'react-router-dom'

const RecentProducts = () => {
  const products = [
    {
      id: 1,
      title: 'Custom any size flag and banner add your own logo',
      image: 'https://www.aozhanflag.com/uploadfile/2024/0428/20240428025523418.jpg',
      category: 'FLAG'
    },
    {
      id: 2,
      title: 'Cheap Digital Printing Polyester Banner Flag 3X5FT Custom Flag',
      image: 'https://www.aozhanflag.com/uploadfile/2024/0428/20240428025523418.jpg',
      category: 'BANNER'
    },
    {
      id: 3,
      title: 'Custom Printing Polyester 12x18 inches All Country National Car Window Banner',
      image: 'https://www.aozhanflag.com/uploadfile/2024/0428/20240428025523418.jpg',
      category: 'BANNER'
    },
    {
      id: 4,
      title: 'NEW Christmas Household Hanging Flag Santa Claus Snowman',
      image: 'https://www.aozhanflag.com/uploadfile/2024/0428/20240428025523418.jpg',
      category: 'FLAG'
    },
    {
      id: 5,
      title: 'Custom DIY 12x18 inch Sublimation Blank White Car Flag',
      image: 'https://www.aozhanflag.com/uploadfile/2024/0428/20240428025523418.jpg',
      category: 'FLAG'
    },
    {
      id: 6,
      title: 'Custom Sublimation Print Elastic Fabrics Car Hood Cover',
      image: 'https://www.aozhanflag.com/uploadfile/2024/0428/20240428025523418.jpg',
      category: 'BANNER'
    },
    {
      id: 7,
      title: 'Personalized Team Logo Flag Crystal Desk Flag Stand',
      image: 'https://www.aozhanflag.com/uploadfile/2024/0428/20240428025523418.jpg',
      category: 'DISPLAY STAND'
    },
    {
      id: 8,
      title: 'Custom Little Table Flag Designed For Special Events',
      image: 'https://www.aozhanflag.com/uploadfile/2024/0428/20240428025523418.jpg',
      category: 'DISPLAY STAND'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Recent Products</h2>
          <p className="text-xl text-gray-600">Explore our latest offerings</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              to="/products"
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 bg-primary text-white px-2 py-1 rounded text-xs font-semibold">
                  {product.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecentProducts

