const About = () => {
  const stats = [
    { number: '2012', label: 'Years Established in' },
    { number: '40+', label: 'Exporting countries and regions' },
    { number: '10000', label: 'm² Factory floor area' },
    { number: '60+', label: 'Authentication certificate' }
  ]

  const advantages = [
    {
      number: '01',
      title: 'Brand Awareness',
      description: 'The company has strong brand awareness, which can attract more consumers and customers and increase sales and market share.'
    },
    {
      number: '02',
      title: 'Talent Advantages',
      description: 'The company has an excellent staff team with rich experience and professional knowledge, which can provide strong support for the company\'s development.'
    },
    {
      number: '03',
      title: 'Innovation Ability',
      description: 'The company has continuous innovation ability and can continuously launch new products, new technologies or new services to meet customer needs and maintain competitiveness.'
    },
    {
      number: '04',
      title: 'Cost Advantage',
      description: 'The company has an efficient production and operation system that can reduce costs and increase profits, thereby becoming price competitive in the market.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600">Learn more about our company and values</p>
        </div>
      </div>

      {/* Company Introduction */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
            </div>
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
      </div>

      {/* Advantages */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Advantages</h2>
            <p className="text-xl text-gray-600">What makes us stand out</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-6xl font-bold text-primary opacity-20 mb-4">
                  {advantage.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global Marketing */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Global Marketing</h2>
          <p className="text-xl text-gray-600 mb-8">Our partners are all over the world</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Australia', 'Southeast Asia', 'Asia', 'North America', 'South America', 'Africa', 'Middle East', 'Europe', 'Russia'].map((region) => (
              <div
                key={region}
                className="bg-gray-100 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                {region}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

