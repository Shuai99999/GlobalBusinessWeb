import { Link } from 'react-router-dom'
import { products } from '../data/products'
import ProductCard from './ProductCard'

// 随机选择产品的函数
const getRandomProducts = (count) => {
  const shuffled = [...products].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

const ProductShowcase = () => {
  // 随机选择4个产品
  const featuredProducts = getRandomProducts(4)

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-xl text-gray-600">High-quality products for your business needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
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

