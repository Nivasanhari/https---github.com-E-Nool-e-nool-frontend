

import BrowseCategories from "@/Pages/Userside/Landing Page/BrowseCategories"
import About from "../Pages/Userside/Landing Page/About"
import Hero from "../Pages/Userside/Landing Page/Hero"
import TrendingBooks from "../Pages/Userside/Landing Page/TrendingBooks"
import Testimonials from "@/Pages/Userside/Landing Page/Testimonials"
import Explore from "@/Pages/Userside/Landing Page/Explore"
import ProcessFlow from "@/Pages/Userside/Landing Page/ProcessFlow"
import Pricing from "@/Pages/Userside/Landing Page/Pricing"
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import FeaturedPublishers from "@/Pages/Userside/Landing Page/FeaturedPublishers"
import FeaturedAuthors from "@/Pages/Userside/Landing Page/FeaturedAuthors"
import GetStarted from "@/Pages/Userside/Landing Page/GetStarted"
export default function Home() {
  return (     
      // <About />
 
    <div className=""> 
      <Navbar />
      <Hero />
      <TrendingBooks/>
      <TrendingBooks />
      <BrowseCategories/>
      <Explore/>
      <TrendingBooks />
      <ProcessFlow/>
      <TrendingBooks />
      <FeaturedAuthors />
      <Testimonials />
      <FeaturedPublishers />
      <GetStarted/>
      <About/>
      <Pricing/>
      <Footer />
      
  </div>

  )
}