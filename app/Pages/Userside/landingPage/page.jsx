import BrowseCategories from "@/app/Pages/Userside/landingPage/BrowseCategories"
import About from "@/app/Pages/Userside/landingPage/About"
import Hero from "@/app/Pages/Userside/landingPage/Hero"
import TrendingBooks from "@/app/Pages/Userside/landingPage/TrendingReads"
import Testimonials from "@/app/Pages/Userside/landingPage/Testimonials"
import ProcessFlow from "@/app/Pages/Userside/landingPage/ProcessFlow"
import Pricing from "@/app/Pages/Userside/landingPage/Pricing"

import FeaturedPublishers from "@/app/Pages/Userside/landingPage/FeaturedPublishers"
import FeaturedAuthors from "@/app/Pages/Userside/landingPage/FeaturedAuthors"

import GetStarted from "@/app/Pages/Userside/landingPage/GetStarted"

import BookCategories from "../browsecategories/page"
import CategoriesButton from "../../../components/CategoriesButton/CategoriesButton"
import NewAndNoteworthy from "@/app/Pages/Userside/landingPage/NewAndNoteworthy"
import EnoolPicks from "@/app/Pages/Userside/landingPage/EnoolPicks"
import StartSeries from "./StartSeries"
import Navbar from "@/app/components/Navbar/Navbar"

export default function page() {
  return (
    // <About />

    <div className="font-graphik">
      <div className="hero_bg hero_bg_1 ">

        <Hero />
        <TrendingBooks />
      </div>
      <NewAndNoteworthy />
      <BrowseCategories />
      <EnoolPicks />
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