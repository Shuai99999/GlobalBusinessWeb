import HeroSection from '../components/HeroSection'
import ProductShowcase from '../components/ProductShowcase'
import Advantages from '../components/Advantages'
import RecentProducts from '../components/RecentProducts'
import CompanyIntro from '../components/CompanyIntro'
import ContactSection from '../components/ContactSection'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ProductShowcase />
      <Advantages />
      <RecentProducts />
      <CompanyIntro />
      <ContactSection />
    </div>
  )
}

export default Home

