import HeroSection from "../../components/HeroSection";
import HeroTwo from "../../components/Herotwo";

import NewArrivals from "../../components/NewArrivals";
import BlogSection from "../../components/OurBlogs"
import OurInstagram from "../../components/Instagram";
import { getFeaturedProduct } from "@/sanity/queries/FetchProduct";
import Productpage from "../../components/ProductPage";



export default async function Home() {
  const featuredData = await getFeaturedProduct() || [];
  return (
    <div>
      <HeroSection />
      <HeroTwo />
<Productpage/>
<OurInstagram/>
      <NewArrivals/>
      <BlogSection/>
     
     
      

    </div>
  );
}
