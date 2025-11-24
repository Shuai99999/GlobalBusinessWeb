const News = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Company held its 2023 Annual Meeting to discuss performance in the foreign trade market',
      date: '2024-04-28',
      image: 'https://www.aozhanflag.com/uploadfile/2024/0428/20240428025523418.jpg',
      excerpt: 'The company recently held its annual meeting to review the past year\'s achievements and discuss future strategies in the international trade market.'
    },
    {
      id: 2,
      title: 'Company shines at the Shanghai International Trade Advertising Exhibition',
      date: '2024-04-28',
      image: 'https://www.aozhanflag.com/uploadfile/2024/0428/20240428025523418.jpg',
      excerpt: 'From February 28 to March 2, 2024, our company participated in the Shanghai International Trade Advertising Exhibition, showcasing our latest products and innovations.'
    },
    {
      id: 3,
      title: 'The latest innovation - the perfect integration of digital printing and sublimation technology',
      date: '2024-04-28',
      image: 'https://www.aozhanflag.com/uploadfile/2024/0428/20240428025523418.jpg',
      excerpt: 'We are proud to introduce our latest innovation in production - the perfect integration of digital printing and sublimation technology, bringing higher quality products to our customers.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our News</h1>
          <p className="text-xl text-gray-600">Stay updated with our latest news and updates</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <button className="text-primary hover:text-blue-700 font-semibold">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default News


