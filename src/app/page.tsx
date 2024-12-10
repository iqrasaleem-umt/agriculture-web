import HeroSection from '@/components/hero'

import Services from './views/services'
import Choose from './views/choose'
import Productlist from './views/productlist'
import Testimonials from './views/testimonials'

export default function Home() {
  return (
   <div >
     <HeroSection/>
     <Services/>
     <Choose/>
     <Productlist/>
     <Testimonials/>
   </div>
  )
}
