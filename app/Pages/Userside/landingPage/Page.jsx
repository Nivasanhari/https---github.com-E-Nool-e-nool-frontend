import BrowseCategories from "@/app/Pages/Userside/landingPage/BrowseCategories"
import About from "@/app/Pages/Userside/landingPage/About"
import Hero from "@/app/Pages/Userside/landingPage/Hero"
import TrendingBooks from "@/app/Pages/Userside/landingPage/TrendingReads"
import Testimonials from "@/app/Pages/Userside/landingPage/Testimonials"
import ProcessFlow from "@/app/Pages/Userside/landingPage/ProcessFlow"
import Pricing from "@/app/Pages/Userside/landingPage/Pricing"
import Flipbook from "@/app/Pages/Userside/landingPage/Flipbook"
import FeaturedPublishers from "@/app/Pages/Userside/landingPage/FeaturedPublishers"
import FeaturedAuthors from "@/app/Pages/Userside/landingPage/FeaturedAuthors"
import LoginPage from "@/app/components/Login/page"
import GetStarted from "@/app/Pages/Userside/landingPage/GetStarted"
import Signup1 from "@/app/components/Signup1/page"
import Otp from "@/app/components/OtpPage/page"
import BookCategories from "./BookCategories"
import CategoriesButton from "../../../components/CategoriesButton/CategoriesButton"
import NewAndNoteworthy from "@/app/Pages/Userside/landingPage/NewAndNoteworthy"
import EnoolPicks from "@/app/Pages/Userside/landingPage/EnoolPicks"
import StartSeries from "./StartSeries"

export default function page() {
  return (
    // <About />

    <div className="">
      <div className="hero_bg hero_bg_1 ">
      <Hero />
      <TrendingBooks />
      </div>
      <NewAndNoteworthy/>
      <BrowseCategories />
      <EnoolPicks/>
      <ProcessFlow />
      <StartSeries />
      <FeaturedAuthors />
      <Testimonials />
      <FeaturedPublishers />
      <GetStarted />
      <About />
      <Pricing />
    </div>

  )
}