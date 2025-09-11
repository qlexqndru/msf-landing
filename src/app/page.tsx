import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutForum from '@/components/AboutForum'
import KeyTopics from '@/components/KeyTopics'
import Highlights from '@/components/Highlights'
import WhyAttend from '@/components/WhyAttend'
import Speakers from '@/components/Speakers'
import RegisterNow from '@/components/RegisterNow'
import Partners from '@/components/Partners'
import MassMedia from '@/components/MassMedia'
import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutForum />
      <KeyTopics />
      <Highlights />
      <WhyAttend />
      <Speakers />
      <RegisterNow />
      <Partners />
      <MassMedia />
      <ContactUs />
      <Footer />
    </div>
  )
}