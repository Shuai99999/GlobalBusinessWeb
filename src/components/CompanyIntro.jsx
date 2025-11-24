const CompanyIntro = () => {
  const stats = [
    { number: '2012', label: 'Years Established in' },
    { number: '40+', label: 'Exporting countries and regions' },
    { number: '10000', label: 'm² Factory floor area' },
    { number: '60+', label: 'Authentication certificate' }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Enterprise Introduction
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our company is a leading international trade company with a long history and good reputation, 
              with more than 14 years of industry experience. Located in a strategic location, our company 
              has built a solid reputation for providing high-quality, customized products to customers around the world.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              With large factories and multiple production lines, we have the ability to meet the needs of 
              global customers. Our production facility is equipped with advanced digital presses and 
              state-of-the-art printing presses imported from leading manufacturers. This advanced technology 
              allows us to provide the highest quality service, ensuring that our products meet the highest standards.
            </p>
            <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              View More
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyIntro

