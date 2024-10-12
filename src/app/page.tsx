import CTA from '@/components/cta/CTA'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'
import WhyChooseUs from '@/components/ourValues/OurValues'
import Reviews from '@/components/reviews/Reviews'
import Services from '@/components/services/Services'
import SpecializationSection from '@/components/specialization/Specialization'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyChooseUs />
        <SpecializationSection />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default Home