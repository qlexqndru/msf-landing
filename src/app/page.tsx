import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutForum from '@/components/AboutForum'
import KeyTopics from '@/components/KeyTopics'
import LastYear from '@/components/LastYear'
import RegisterNow from '@/components/RegisterNow'
import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutForum />
      <KeyTopics />
      <LastYear />
      <RegisterNow />
      <ContactUs />
      <Footer />
    </div>
  )
}