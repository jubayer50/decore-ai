import AIAssistant from "@/Components/HomePage/AIAssistant/AIAssistant";
import Banner from "@/Components/HomePage/Banner/Banner";
import BrowseByCategory from "@/Components/HomePage/BrowsebyCategory/BrowsebyCategory";
import HowDecoraAIWorks from "@/Components/HomePage/HowDecoraAIWorks/HowDecoraAIWorks";
import WhyChooseDecoraAI from "@/Components/HomePage/WhyChooseDecoraAI/WhyChooseDecoraAI";
import InteriorDesignStatistics from "@/Components/HomePage/InteriorDesignStatistics/InteriorDesignStatistics";
import FeaturedInteriorDesigns from "@/Components/HomePage/FeaturedInteriorDesigns/FeaturedInteriorDesigns";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>

      <BrowseByCategory></BrowseByCategory>

      <FeaturedInteriorDesigns></FeaturedInteriorDesigns>

      <AIAssistant></AIAssistant>

      <WhyChooseDecoraAI></WhyChooseDecoraAI>

      <InteriorDesignStatistics></InteriorDesignStatistics>

      <HowDecoraAIWorks></HowDecoraAIWorks>
    </div>
  );
};

export default HomePage;
