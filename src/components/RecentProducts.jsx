import { products } from '../data/products'
import ProductCard from './ProductCard'

// 随机选择产品的函数（排除已显示的产品）
const getRandomProducts = (count, excludeIds = []) => {
  const available = products.filter(p => !excludeIds.includes(p.id))
  const shuffled = [...available].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

const RecentProducts = () => {
  // 随机选择8个产品（与ProductShowcase不重复）
  // 这里简单处理，实际可以传递已显示的产品ID来避免重复
  const recentProducts = getRandomProducts(8)

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Recent Products</h2>
          <p className="text-xl text-gray-600">Explore our latest offerings</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecentProducts

