import HeroSection from "../../components/HeroSection";
import HeroTwo from "../../components/Herotwo";
import ProductPage from "../../components/ProductPage";
import NewArrivals from "../../components/NewArrivals";
import BlogSection from "../../components/OurBlogs"
import OurInstagram from "../../components/Instagram";



import { getFeaturedProduct } from "@/sanity/queries/FetchProduct";



export default async function Home() {
  const featuredData = await getFeaturedProduct() || [];
  return (
    <div>
      <HeroSection />
      <HeroTwo />
  <ProductPage/>
<OurInstagram/>
      <NewArrivals/>
      <BlogSection/>
     
     
      

    </div>
  );
}
