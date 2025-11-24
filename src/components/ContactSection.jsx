const ContactSection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Talk to our team today</h2>
        <p className="text-xl mb-8 text-blue-100">
          We take pride in providing timely, reliable and useful services
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Consult now
        </a>
      </div>
    </section>
  )
}

export default ContactSection


