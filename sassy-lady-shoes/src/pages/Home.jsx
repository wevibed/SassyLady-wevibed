import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import NewArrivals from "@/components/sections/NewArrivals";
import ShopByCategory from "@/components/sections/ShopByCategory";
import CurrentlyInStore from "@/components/sections/CurrentlyInStore";
import FeaturedLook from "@/components/sections/FeaturedLook";
import SocialGallery from "@/components/sections/SocialGallery";
import StoreSection from "@/components/sections/StoreSection";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <NewArrivals />
        <ShopByCategory />
        <CurrentlyInStore />
        <FeaturedLook />
        <SocialGallery />
        <StoreSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}