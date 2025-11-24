const Advantages = () => {
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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
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
    </section>
  )
}

export default Advantages

