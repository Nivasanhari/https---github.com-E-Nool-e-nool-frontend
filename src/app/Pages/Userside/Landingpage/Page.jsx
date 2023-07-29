import BrowseCategories from "@/app/Pages/Userside/Landingpage/BrowseCategories"
import About from "@/app/Pages/Userside/Landingpage/About"
import Hero from "@/app/Pages/Userside/Landingpage/Hero"
import TrendingBooks from "@/app/Pages/Userside/Landingpage/TrendingBooks"
import Testimonials from "@/app/Pages/Userside/Landingpage/Testimonials"
import Explore from "@/app/Pages/Userside/Landingpage/Explore"
import ProcessFlow from "@/app/Pages/Userside/Landingpage/ProcessFlow"
import Pricing from "@/app/Pages/Userside/Landingpage/Pricing"
import Navbar from "@/app/Components/Navbar/Navbar";
import Footer from "@/app/Components/Footer/Footer";
import FeaturedPublishers from "@/app/Pages/Userside/Landingpage/FeaturedPublishers"
import FeaturedAuthors from "@/app/Pages/Userside/Landingpage/FeaturedAuthors"
import GetStarted from "@/app/Pages/Userside/Landingpage/GetStarted"
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