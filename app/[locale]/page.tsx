// import Banner from "@/components/home/Banner"
import Banner2 from "@/components/home/Banner2"
import Footer from "@/components/home/Footer"
import Header from "@/components/home/Header"
import Header2 from "@/components/home/Header2"
import HowItWorks from "@/components/home/How-it-works"
import KeyClients from "@/components/home/KeyClients"
import MobileApp from "@/components/home/MobileAppPromo"
import Service from "@/components/home/Service"
import Testimonials from "@/components/home/Testimonials"
import WhyTruckLagbe from "@/components/home/why-truck-lagbe"

export default function Home() {
  return (
    <div>
      <Header2/>
      {/* <Header /> */}
      <Banner2/>
<Service/>
      {/* <p> will be a banner</p> */}
      {/* <Banner /> */}
      {/* <MobileLogin/> */}

      <WhyTruckLagbe />
      <HowItWorks />
      <Testimonials />
      <KeyClients />
      <MobileApp />
      <Footer />
    </div>
  )
}

