import BrowseCategories from "@/app/Pages/Userside/Landing Page/BrowseCategories"
import About from "@/app/Pages/Userside/Landing Page/About"
import Hero from "@/app/Pages/Userside/Landing Page/Hero"
import TrendingBooks from "@/app/Pages/Userside/Landing Page/TrendingReads"
import Testimonials from "@/app/Pages/Userside/Landing Page/Testimonials"
import ProcessFlow from "@/app/Pages/Userside/Landing Page/ProcessFlow"
import Pricing from "@/app/Pages/Userside/Landing Page/Pricing"
import Flipbook from "@/app/Pages/Userside/Landing Page/Flipbook"
import FeaturedPublishers from "@/app/Pages/Userside/Landing Page/FeaturedPublishers"
import FeaturedAuthors from "@/app/Pages/Userside/Landing Page/FeaturedAuthors"
import LoginPage from "@/app/components/Login/page"
import GetStarted from "@/app/Pages/Userside/Landing Page/GetStarted"
import Signup1 from "@/app/components/Signup1/page"
import Otp from "@/app/components/OtpPage/page"
import BookCategories from "./BookCategories"
import CategoriesButton from "../../../components/CategoriesButton/CategoriesButton"
export default function page() {
  return (
    // <About />

    <div className="">
      <div className="hero_bg hero_bg_1 ">
      <Hero />
      <TrendingBooks />
      </div>
      <ProcessFlow />
      <BrowseCategories/>
      <FeaturedAuthors />
      <Testimonials />
      <FeaturedPublishers />
      <GetStarted />
      <About />
      <Pricing />
      {/* <Flipbook/> */}
    </div>

  )
}