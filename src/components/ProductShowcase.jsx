import { Link } from 'react-router-dom'

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: 'FLAG',
      image: 'https://www.aozhanflag.com/uploadfile/2024/0428/20240428025523418.jpg',
      description: 'High-quality custom flags for all occasions'
    },
    {
      id: 2,
      name: 'BEACH FLAG',
      image: 'https://www.aozhanflag.com/uploadfile/2024/0428/20240428025523418.jpg',
      description: 'Durable beach flags perfect for outdoor events'
    },
    {
      id: 3,
      name: 'DISPLAY STAND',
      image: 'https://www.aozhanflag.com/uploadfile/2024/0428/20240428025523418.jpg',
      description: 'Professional display stands for exhibitions'
    },
    {
      id: 4,
      name: 'BANNER',
      image: 'https://www.aozhanflag.com/uploadfile/2024/0428/20240428025523418.jpg',
      description: 'Custom printed banners for advertising'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-xl text-gray-600">High-quality products for your business needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              to="/products"
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase

