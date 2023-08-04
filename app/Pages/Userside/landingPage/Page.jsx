import BrowseCategories from "@/app/Pages/Userside/landingPage/BrowseCategories"
import About from "@/app/Pages/Userside/landingPage/About"
import Hero from "@/app/Pages/Userside/landingPage/Hero"
import TrendingBooks from "@/app/Pages/Userside/landingPage/TrendingBooks"
import Testimonials from "@/app/Pages/Userside/landingPage/Testimonials"
import Explore from "@/app/Pages/Userside/landingPage/Explore"
import ProcessFlow from "@/app/Pages/Userside/landingPage/ProcessFlow"
import Pricing from "@/app/Pages/Userside/landingPage/Pricing"

import FeaturedPublishers from "@/app/Pages/Userside/landingPage/FeaturedPublishers"
import FeaturedAuthors from "@/app/Pages/Userside/landingPage/FeaturedAuthors"
import GetStarted from "@/app/Pages/Userside/landingPage/GetStarted"
export default function page() {
  return (
    // <About />

    <div className="">
      <Hero />
      <TrendingBooks />
      <TrendingBooks />
      <BrowseCategories />
      <Explore />
      <TrendingBooks />
      <ProcessFlow />
      <TrendingBooks />
      <FeaturedAuthors />
      <Testimonials />
      <FeaturedPublishers />
      <GetStarted />
      <About />
      <Pricing />
      </div>

  )
}